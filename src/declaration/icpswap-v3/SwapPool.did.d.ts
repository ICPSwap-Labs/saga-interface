import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface AccountBalance { 'balance0' : bigint, 'balance1' : bigint }
export interface ClaimArgs { 'operator' : Principal, 'positionId' : bigint }
export interface DecreaseLiquidityArgs {
  'operator' : Principal,
  'liquidity' : string,
  'amount0Min' : string,
  'amount1Min' : string,
  'positionId' : bigint,
}
export interface DepositArgs { 'token' : string, 'amount' : bigint }
export type Error = { 'CommonError' : null } |
  { 'InternalError' : string } |
  { 'UnsupportedToken' : string } |
  { 'InsufficientFunds' : null };
export interface GetPositionArgs { 'tickUpper' : bigint, 'tickLower' : bigint }
export interface IncreaseLiquidityArgs {
  'operator' : Principal,
  'amount0Min' : string,
  'amount1Min' : string,
  'positionId' : bigint,
  'amount0Desired' : string,
  'amount1Desired' : string,
}
export interface MintArgs {
  'fee' : bigint,
  'tickUpper' : bigint,
  'operator' : Principal,
  'amount0Min' : string,
  'amount1Min' : string,
  'token0' : string,
  'token1' : string,
  'amount0Desired' : string,
  'amount1Desired' : string,
  'tickLower' : bigint,
}
export interface Page {
  'content' : Array<TickLiquidityInfo>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface PoolMetadata {
  'fee' : bigint,
  'key' : string,
  'sqrtPriceX96' : bigint,
  'tick' : bigint,
  'liquidity' : bigint,
  'token0' : Token,
  'token1' : Token,
}
export interface PositionInfo {
  'tokensOwed0' : bigint,
  'tokensOwed1' : bigint,
  'feeGrowthInside1LastX128' : bigint,
  'liquidity' : bigint,
  'feeGrowthInside0LastX128' : bigint,
}
export type Result = { 'ok' : bigint } |
  { 'err' : Error };
export type Result_1 = {
    'ok' : { 'tokensOwed0' : bigint, 'tokensOwed1' : bigint }
  } |
  { 'err' : Error };
export type Result_10 = { 'ok' : { 'amount0' : bigint, 'amount1' : bigint } } |
  { 'err' : Error };
export type Result_2 = { 'ok' : PoolMetadata } |
  { 'err' : Error };
export type Result_3 = { 'ok' : { 'balance0' : bigint, 'balance1' : bigint } } |
  { 'err' : Error };
export type Result_4 = { 'ok' : UserPositionInfo } |
  { 'err' : Error };
export type Result_5 = { 'ok' : Page } |
  { 'err' : Error };
export type Result_6 = {
    'ok' : { 'swapFee0Repurchase' : bigint, 'swapFee1Repurchase' : bigint }
  } |
  { 'err' : Error };
export type Result_7 = { 'ok' : Principal } |
  { 'err' : Error };
export type Result_8 = { 'ok' : PositionInfo } |
  { 'err' : Error };
export type Result_9 = { 'ok' : Array<[string, Principal]> } |
  { 'err' : Error };
export interface SwapArgs {
  'operator' : Principal,
  'amountIn' : string,
  'zeroForOne' : boolean,
  'amountOutMinimum' : string,
}
export interface SwapPool {
  'allTokenBalance' : ActorMethod<[], Array<[Principal, AccountBalance]>>,
  'claim' : ActorMethod<[ClaimArgs], Result_10>,
  'decreaseLiquidity' : ActorMethod<[DecreaseLiquidityArgs], Result_10>,
  'deposit' : ActorMethod<[DepositArgs], Result>,
  'depositFrom' : ActorMethod<[DepositArgs], Result>,
  'getAddressPrincipals' : ActorMethod<[], Result_9>,
  'getPosition' : ActorMethod<[GetPositionArgs], Result_8>,
  'getPrincipal' : ActorMethod<[string], Result_7>,
  'getSwapFeeRepurchaseAmount' : ActorMethod<[], Result_6>,
  'getTickInfos' : ActorMethod<[bigint, bigint], Result_5>,
  'getTokenMeta' : ActorMethod<
    [],
    { 'token0' : Array<[string, Value]>, 'token1' : Array<[string, Value]> },
  >,
  'getUserPosition' : ActorMethod<[bigint], Result_4>,
  'getUserUnusedBalance' : ActorMethod<[Principal], Result_3>,
  'increaseLiquidity' : ActorMethod<[IncreaseLiquidityArgs], Result>,
  'metadata' : ActorMethod<[], Result_2>,
  'mint' : ActorMethod<[MintArgs], Result>,
  'quote' : ActorMethod<[SwapArgs], Result>,
  'refreshIncome' : ActorMethod<[bigint], Result_1>,
  'swap' : ActorMethod<[SwapArgs], Result>,
  'withdraw' : ActorMethod<[WithdrawArgs], Result>,
}
export interface TickLiquidityInfo {
  'tickIndex' : bigint,
  'price0Decimal' : bigint,
  'liquidityNet' : bigint,
  'price0' : bigint,
  'price1' : bigint,
  'liquidityGross' : bigint,
  'price1Decimal' : bigint,
}
export interface Token { 'address' : string, 'standard' : string }
export interface UserPositionInfo {
  'tickUpper' : bigint,
  'tokensOwed0' : bigint,
  'tokensOwed1' : bigint,
  'feeGrowthInside1LastX128' : bigint,
  'liquidity' : bigint,
  'feeGrowthInside0LastX128' : bigint,
  'tickLower' : bigint,
}
export type Value = { 'Int' : bigint } |
  { 'Nat' : bigint } |
  { 'Blob' : Array<number> } |
  { 'Text' : string };
export interface WithdrawArgs { 'token' : string, 'amount' : bigint }
export interface _SERVICE extends SwapPool {}
