import { Price, Currency, CurrencyAmount, formatTokenAmount, Token, FeeAmount, BigNumber, Pool } from "@icpswap/sdk";
import { useAppSelector } from "store/hooks";
import { useMemo, useState, useEffect } from "react";
import { WRAPPED_ICP, ICP } from "constants/tokens";

export function useICPPrice(): number | undefined {
  const { ICPPriceList } = useAppSelector((state) => state.global);

  return useMemo(() => {
    if (ICPPriceList.length) {
      const price = ICPPriceList[ICPPriceList.length - 1]["value"];
      return price;
    }
    return undefined;
  }, [ICPPriceList]);
}

/**
 * Returns the price in USD of the input currency
 * @param currency currency to compute the USD price of
 */
export function useUSDPrice(currency: Currency | undefined): Price<Currency, Token> | undefined {
  const _currency = useMemo(() => {
    if (!currency) return undefined;
    if (currency?.wrapped.equals(WRAPPED_ICP) || currency?.wrapped.equals(ICP)) return undefined;
    return currency;
  }, [currency]);

  const _ICPPrice = useICPPrice();

  const ICPPrice = useMemo(() => {
    if (_ICPPrice) {
      return new Price(
        ICP,
        ICP,
        formatTokenAmount(1, ICP.decimals).toString(),
        formatTokenAmount(_ICPPrice, ICP.decimals).toString()
      );
    }
    return undefined;
  }, [_ICPPrice]);

  return useMemo(() => {
    if (!currency || !ICPPrice) {
      return undefined;
    }

    // handle ICP
    if (
      currency?.wrapped.equals(ICP) ||
      currency?.wrapped.equals(ICP) ||
      currency?.wrapped.equals(WRAPPED_ICP) ||
      currency?.wrapped.equals(WRAPPED_ICP)
    ) {
      return ICPPrice;
    }

    return new Price(currency, ICP, 1, 1);
  }, [currency, ICP, ICPPrice]);
}

export function useUSDValue(currencyAmount: CurrencyAmount<Currency> | undefined) {
  const price = useUSDPrice(currencyAmount?.currency);

  return useMemo(() => {
    if (!price || !currencyAmount) return null;
    try {
      return price.quote(currencyAmount);
    } catch (error) {
      return null;
    }
  }, [currencyAmount, price]);
}

export function useInterfacePrice(currency: Currency | undefined): BigNumber | undefined {
  return useMemo(() => {
    return new BigNumber(1);

    return undefined;
  }, [currency, WRAPPED_ICP]);
}

export function useInterfacePriceFromPool(
  pool: Pool | undefined | null,
  currency: Currency | undefined
): BigNumber | undefined {
  const [amountOut, setAmountOut] = useState<CurrencyAmount<Currency> | undefined>(undefined);

  const ICPPrice = useICPPrice();

  useEffect(() => {
    const call = async () => {
      if (pool && currency && !currency.equals(WRAPPED_ICP.wrapped)) {
        const [amountOut] = await pool.getOutputAmount(
          CurrencyAmount.fromRawAmount(currency.wrapped, formatTokenAmount(1, currency.decimals).toString())
        );

        setAmountOut(amountOut);
      }
    };

    call();
  }, [currency, WRAPPED_ICP, pool]);

  return useMemo(() => {
    if (!currency || !ICPPrice) {
      return undefined;
    }

    // handle ICP
    if (currency?.wrapped.equals(WRAPPED_ICP) || currency?.wrapped.equals(ICP)) {
      return new BigNumber(ICPPrice);
    }

    if (amountOut) {
      return new BigNumber(amountOut.toExact()).multipliedBy(ICPPrice);
    }

    return undefined;
  }, [currency, WRAPPED_ICP, amountOut, ICPPrice]);
}
