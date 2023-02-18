import type { Principal } from '@dfinity/principal';
export type NatResult = { 'ok' : bigint } |
  { 'err' : string };
export interface WICPType {
  'icpswap' : { 'decimals' : bigint, 'address' : string },
  'sonic' : { 'decimals' : bigint, 'address' : string },
}
export interface _SERVICE {
  'addAdmin' : (arg_0: string) => Promise<boolean>,
  'cycleAvailable' : () => Promise<NatResult>,
  'cycleBalance' : () => Promise<NatResult>,
  'getAdminList' : () => Promise<Array<string>>,
  'getICP_XDR_Price' : () => Promise<number>,
  'getIcpPrice' : (arg_0: bigint) => Promise<number>,
  'getSwapRouterCanisterId' : () => Promise<string>,
  'getTokenUSDPrice' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: string,
      arg_3: bigint,
    ) => Promise<number>,
  'getWicp' : () => Promise<WICPType>,
  'getWicpPrice' : () => Promise<number>,
  'getWicps' : () => Promise<Array<string>>,
  'isAdmin' : (arg_0: string) => Promise<boolean>,
  'removeAdmin' : (arg_0: string) => Promise<boolean>,
  'setICPXDRRate' : (arg_0: number) => Promise<undefined>,
  'setSwapRouterCanisterId' : (arg_0: string) => Promise<undefined>,
  'setWICP' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'setWicpPrice' : (arg_0: number) => Promise<undefined>,
}
