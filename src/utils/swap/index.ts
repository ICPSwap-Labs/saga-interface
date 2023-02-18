import { BigintIsh, Currency, CurrencyAmount, NO_GROUP_SEPARATOR_FORMATTER, BigNumber } from "@icpswap/sdk";
import JSBI from "@icpswap/sdk/node_modules/jsbi";

export function tryParseAmount<T extends Currency>(value?: string, currency?: T): CurrencyAmount<T> | undefined {
  if (!value || !currency) {
    return undefined;
  }
  try {
    const typedValueParsed = new BigNumber(value)
      .multipliedBy(10 ** currency.decimals)
      .toFormat(NO_GROUP_SEPARATOR_FORMATTER);

    if (typedValueParsed !== "0") {
      return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed));
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug(`Failed to parse input amount: "${value}"`, error);
  }
  // necessary for all paths to return a value
  return undefined;
}

export function toHex(bigintIsh: BigintIsh) {
  const bigInt = JSBI.BigInt(bigintIsh);
  let hex = bigInt.toString(16);
  if (hex.length % 2 !== 0) {
    hex = `0${hex}`;
  }
  return `0x${hex}`;
}

export function feeAmountToPercentage(feeAmount: number | string): string {
  return `${new BigNumber(feeAmount).div(10000).toFixed(2)}%`;
}
