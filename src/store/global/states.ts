import { drawerWidth } from "constants/theme";
import { DEFAULT_LOCALE, SupportedLocale } from "constants/locales";
import { ICPPriceInfo, TokenMetadata } from "types/token";
import { TokenListTokenMetadata } from "types/token-list";
import { BigNumber } from "@icpswap/sdk";

export interface GlobalState {
  drawerWidth: number;
  xdr_usdt: number;
  ICPPriceList: ICPPriceInfo[];
  tokenList: TokenListTokenMetadata[];
  hasBeenClaimTestToken: boolean;
  requestTokenList: TokenMetadata[];
  swapTokenList: [];
  ICSBalance: BigNumber;
  ICPBalance: BigNumber;
  userLocale: SupportedLocale;
  userCounter: string;
  secondBlocks: string | number;
  blocks: string | number;
  poolStandardUpdated: boolean;
}

export const initialState: GlobalState = {
  drawerWidth,
  xdr_usdt: 1.31,
  ICPPriceList: [],
  tokenList: [],
  hasBeenClaimTestToken: false,
  requestTokenList: [],
  swapTokenList: [],
  ICSBalance: new BigNumber(0),
  ICPBalance: new BigNumber(0),
  userLocale: DEFAULT_LOCALE,
  userCounter: "0",
  secondBlocks: "0",
  blocks: "0",
  poolStandardUpdated: false,
};
