import { Token, Price, tickToPrice } from "@icpswap/sdk";

export function getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price<Token, Token> | undefined {
  if (!baseToken || !quoteToken || typeof tick !== "number") return undefined;
  return tickToPrice(baseToken, quoteToken, tick);
}
