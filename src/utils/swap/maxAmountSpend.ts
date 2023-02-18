import { Currency, CurrencyAmount } from "@icpswap/sdk";

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount<Currency>): CurrencyAmount<Currency> | undefined {
  if (!currencyAmount) return undefined;

  const maxAmountSubFee = currencyAmount.subtract(
    CurrencyAmount.fromRawAmount(currencyAmount.currency, currencyAmount.currency.transFee * 3)
  );

  return maxAmountSubFee;
}
