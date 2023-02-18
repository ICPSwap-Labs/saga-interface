import { Percent } from "@icpswap/sdk";
import JSBI from "@icpswap/sdk/node_modules/jsbi";
import { ONE_HUNDRED_PERCENT } from "constants/misc";

export function computeFiatValuePriceImpact(fiatValueInput, fiatValueOutput) {
  if (!fiatValueOutput || !fiatValueInput) return undefined;
  if (!fiatValueInput.currency.equals(fiatValueOutput.currency)) return undefined;
  if (JSBI.equal(fiatValueInput.quotient, JSBI.BigInt(0))) return undefined;
  const pct = ONE_HUNDRED_PERCENT.subtract(fiatValueOutput.divide(fiatValueInput));
  return new Percent(pct.numerator, pct.denominator);
}
