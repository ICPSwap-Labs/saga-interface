import { createAction } from "@reduxjs/toolkit";
import { ICPPriceInfo, TokenMetadata } from "types/token";
import { BigNumber } from "@icpswap/sdk";
import { SupportedLocale } from "constants/locales";
import { TokenMetadata as TokenListTokenMetadata } from "types/token-list";

export const updateXDR2USD = createAction<number>("global/updateXDR2USD");

export const updateDrawerWidth = createAction<number>("global/updateDrawerWidth");

export const updateICSBalance = createAction<BigNumber>("global/updateICSBalance");

export const updateICPBalance = createAction<BigNumber>("global/updateICPBalance");

export const updateICPBlocks = createAction<{
  blocks: string | number;
  secondBlocks: string | number;
}>("global/updateICPBlocks");

export const updateICPPriceList = createAction<ICPPriceInfo[]>("global/updateICPPriceList");

export const addCatchToken = createAction<TokenMetadata[]>("global/addCatchToken");

export const updateUserLocale = createAction<SupportedLocale>("global/updateUserLocale");

export const updateTokenList = createAction<TokenListTokenMetadata[]>("global/updateTokenList");

export const updatePoolStandardInitialed = createAction<boolean>("global/updatePoolStandardInitialed");
