import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type AccountIdentifier = string;
export interface ChangePoolInfo {
  'stakingTokenSymbol' : string,
  'lastRewardTime' : bigint,
  'rewardTokenSymbol' : string,
  'stakingToken' : Token,
  'rewardToken' : Token,
  'rewardPerTime' : bigint,
  'stakingTokenFee' : bigint,
  'rewardTokenFee' : bigint,
  'stakingTokenDecimals' : bigint,
  'bonusEndTime' : bigint,
  'BONUS_MULTIPLIER' : bigint,
  'rewardTokenDecimals' : bigint,
}
export type Error = { 'CommonError' : null } |
  { 'InternalError' : string } |
  { 'UnsupportedToken' : string } |
  { 'InsufficientFunds' : null };
export interface InitRequest {
  'stakingTokenSymbol' : string,
  'startTime' : bigint,
  'rewardTokenSymbol' : string,
  'stakingToken' : Token,
  'rewardToken' : Token,
  'rewardPerTime' : bigint,
  'name' : string,
  'stakingTokenFee' : bigint,
  'rewardTokenFee' : bigint,
  'stakingTokenDecimals' : bigint,
  'bonusEndTime' : bigint,
  'BONUS_MULTIPLIER' : bigint,
  'rewardTokenDecimals' : bigint,
}
export interface Ledger {
  'staking' : number,
  'claim' : number,
  'stakingBalance' : number,
  'unStaking' : number,
  'rewardBalance' : number,
}
export interface PublicPoolInfo {
  'stakingTokenSymbol' : string,
  'lastRewardTime' : bigint,
  'totalDeposit' : bigint,
  'rewardTokenSymbol' : string,
  'stakingToken' : Token,
  'rewardToken' : Token,
  'rewardPerTime' : bigint,
  'stakingTokenFee' : bigint,
  'rewardDebt' : bigint,
  'storageCid' : string,
  'rewardTokenFee' : bigint,
  'accPerShare' : bigint,
  'stakingTokenDecimals' : bigint,
  'bonusEndTime' : bigint,
  'BONUS_MULTIPLIER' : bigint,
  'rewardTokenDecimals' : bigint,
  'allocPoint' : bigint,
}
export interface PublicUserInfo {
  'pendingReward' : bigint,
  'rewardDebt' : bigint,
  'amount' : bigint,
}
export type Result = { 'ok' : string } |
  { 'err' : string };
export type Result_1 = { 'ok' : boolean } |
  { 'err' : string };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_3 = { 'ok' : PublicUserInfo } |
  { 'err' : string };
export type Result_4 = { 'ok' : PublicPoolInfo } |
  { 'err' : string };
export type Result_5 = { 'ok' : Array<string> } |
  { 'err' : string };
export type Result_6 = { 'ok' : bigint } |
  { 'err' : bigint };
export type Result_7 = { 'ok' : Ledger } |
  { 'err' : Error };
export interface SingleSmartChef {
  'addAdmin' : ActorMethod<[string], Result_1>,
  'changePoolInfo' : ActorMethod<[ChangePoolInfo], undefined>,
  'clearLocksMap' : ActorMethod<[], undefined>,
  'compareLedger' : ActorMethod<[], Result_7>,
  'cycleAvailable' : ActorMethod<[], Result_6>,
  'cycleBalance' : ActorMethod<[], Result_6>,
  'deposit' : ActorMethod<[bigint], Result>,
  'endSingleSmartChefCanister' : ActorMethod<[], undefined>,
  'getAdminList' : ActorMethod<[], Result_5>,
  'getAllLocks' : ActorMethod<[], Array<[string, bigint]>>,
  'getAllUserInfoEntries' : ActorMethod<[], string>,
  'getPoolInfo' : ActorMethod<[], Result_4>,
  'getUserInfo' : ActorMethod<[User], Result_3>,
  'harvest' : ActorMethod<[], Result_2>,
  'initLedger' : ActorMethod<[], undefined>,
  'pendingReward' : ActorMethod<[User], Result_2>,
  'removeAdmin' : ActorMethod<[string], Result_1>,
  'resetReward' : ActorMethod<[bigint, bigint], undefined>,
  'setAutoUnlockTimes' : ActorMethod<[bigint], bigint>,
  'stopReward' : ActorMethod<[], undefined>,
  'updateMultiplier' : ActorMethod<[bigint], undefined>,
  'withdraw' : ActorMethod<[bigint], Result>,
}
export interface Token { 'address' : string, 'standard' : string }
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE extends SingleSmartChef {}
