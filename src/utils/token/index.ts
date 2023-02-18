import { Token, numberToString, BigNumber } from "@icpswap/sdk";
import { TOKEN_STANDARD } from "@icpswap/calls";

export function isUseTransfer(token: Token | undefined) {
  if (token === undefined) return false;
  return token.standard.includes("ICRC1") || token.standard === TOKEN_STANDARD.ICP;
}

export function isUseTransferByStandard(standard: TOKEN_STANDARD) {
  return standard.includes("ICRC1") || standard === TOKEN_STANDARD.ICP;
}

export function actualAmountToPool(token: Token, amount: string) {
  if (isUseTransfer(token)) {
    if (!new BigNumber(amount).minus(token.transFee).isGreaterThan(0)) {
      return "0";
    }
    return numberToString(new BigNumber(amount).minus(token.transFee));
  }
  return amount;
}
