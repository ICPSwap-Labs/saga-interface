import type { Principal } from '@dfinity/principal';
export type NatResult = { 'ok' : bigint } |
  { 'err' : string };
export interface PoolInfo {
  'fee' : bigint,
  'token0Id' : string,
  'token1Id' : string,
  'pool' : string,
  'token1Price' : number,
  'token1Decimals' : number,
  'token0Symbol' : string,
  'token0Decimals' : number,
  'token0Price' : number,
  'token1Symbol' : string,
}
export interface PublicTokenChartDayData {
  'id' : bigint,
  'volumeUSD' : number,
  'tvlUSD' : number,
  'timestamp' : bigint,
}
export interface PublicTokenOverview {
  'id' : bigint,
  'totalVolumeUSD' : number,
  'name' : string,
  'rate' : number,
  'priceUSDChangeWeek' : number,
  'volumeUSD' : number,
  'feesUSD' : number,
  'priceUSDChange' : number,
  'tvlUSD' : number,
  'address' : string,
  'volumeUSDWeek' : number,
  'txCount' : bigint,
  'priceUSD' : number,
  'rateChange' : number,
  'volumeUSDChange' : number,
  'tvlUSDChange' : number,
  'rateChangeWeek' : number,
  'standard' : string,
  'tvlToken' : number,
  'symbol' : string,
}
export interface PublicTokenPricesData {
  'id' : bigint,
  'low' : number,
  'high' : number,
  'close' : number,
  'open' : number,
  'timestamp' : bigint,
}
export interface TransactionsType {
  'to' : string,
  'action' : _TransactionType,
  'token0Id' : string,
  'token1Id' : string,
  'liquidityTotal' : bigint,
  'from' : string,
  'exchangePrice' : number,
  'hash' : string,
  'tick' : bigint,
  'token1Price' : number,
  'recipient' : string,
  'token0ChangeAmount' : number,
  'sender' : string,
  'exchangeRate' : number,
  'liquidityChange' : bigint,
  'token1Standard' : string,
  'token0Fee' : number,
  'token1Fee' : number,
  'timestamp' : bigint,
  'token1ChangeAmount' : number,
  'token1Decimals' : number,
  'token0Standard' : string,
  'amountUSD' : number,
  'amountToken0' : number,
  'amountToken1' : number,
  'poolFee' : bigint,
  'token0Symbol' : string,
  'token0Decimals' : number,
  'token0Price' : number,
  'token1Symbol' : string,
  'poolId' : string,
}
export type _TransactionType = { 'fee' : null } |
  { 'burn' : null } |
  { 'claim' : null } |
  { 'mint' : null } |
  { 'swap' : null } |
  { 'addLiquidity' : null } |
  { 'removeLiquidity' : null } |
  { 'refreshIncome' : null } |
  { 'transfer' : null } |
  { 'collect' : null };
export interface _SERVICE {
  'cycleAvailable' : () => Promise<NatResult>,
  'cycleBalance' : () => Promise<NatResult>,
  'getAllToken' : () => Promise<Array<PublicTokenOverview>>,
  'getAllTransactions' : (arg_0: bigint, arg_1: bigint) => Promise<
      Array<TransactionsType>
    >,
  'getPoolsForToken' : (arg_0: string) => Promise<Array<PoolInfo>>,
  'getRollIndex' : () => Promise<bigint>,
  'getToken' : (arg_0: string) => Promise<PublicTokenOverview>,
  'getTokenChartData' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<PublicTokenChartDayData>>,
  'getTokenPricesData' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<Array<PublicTokenPricesData>>,
  'getTokenTransactions' : (
      arg_0: string,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<TransactionsType>>,
  'getTvlRecord' : () => Promise<string>,
  'reset' : () => Promise<undefined>,
  'rollBackData' : (arg_0: Array<TransactionsType>) => Promise<undefined>,
  'saveTransactions' : (arg_0: TransactionsType, arg_1: boolean) => Promise<
      undefined
    >,
}
