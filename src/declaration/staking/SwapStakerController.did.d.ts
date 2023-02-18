import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Canisters {
  'swapNFTCid' : string,
  'lockCid' : string,
  'wicp' : Token,
  'swapStakerCreateTokenPoolsController' : string,
  'swapStakerControllerCid' : string,
  'swapFactory' : string,
  'swapStakerCreateFarmsController' : string,
}
export interface GlobalDataResult {
  'count' : bigint,
  'globalTVL' : number,
  'globalRewardTVL' : number,
}
export interface IncentiveKey {
  'startTime' : bigint,
  'rewardTokenSymbol' : string,
  'rewardToken' : Token,
  'endTime' : bigint,
  'pool' : string,
  'rewardTokenFee' : bigint,
  'rewardTokenDecimals' : bigint,
}
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
export interface Page {
  'content' : Array<SmartChefType>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface Page_1 {
  'content' : Array<PublicIncentive>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface PublicIncentive {
  'startTime' : bigint,
  'status' : string,
  'rewardTokenSymbol' : string,
  'numberOfStakes' : bigint,
  'incentiveCanisterId' : string,
  'rewardToken' : Token,
  'totalLiquidity' : bigint,
  'endTime' : bigint,
  'incentive' : string,
  'totalAmount0' : bigint,
  'totalAmount1' : bigint,
  'pool' : string,
  'refundee' : string,
  'totalRewardClaimed' : bigint,
  'stakesTokenIds' : Array<bigint>,
  'storageCid' : string,
  'rewardTokenFee' : bigint,
  'poolToken0' : Token,
  'poolToken1' : Token,
  'poolFee' : bigint,
  'totalReward' : bigint,
  'userTotalAmount0' : bigint,
  'userTotalAmount1' : bigint,
  'rewardTokenDecimals' : bigint,
  'userNumberOfStakes' : bigint,
  'totalRewardUnclaimed' : bigint,
  'totalSecondsClaimedX128' : bigint,
  'userTotalLiquidity' : bigint,
}
export type Result = { 'ok' : Page } |
  { 'err' : Page };
export type Result_1 = { 'ok' : SingleSmartChefGlobalDataType } |
  { 'err' : string };
export type Result_2 = { 'ok' : GlobalDataResult } |
  { 'err' : string };
export type Result_3 = { 'ok' : Page_1 } |
  { 'err' : string };
export type Result_4 = { 'ok' : string } |
  { 'err' : string };
export interface SingleSmartChefGlobalDataType {
  'earned' : number,
  'stakerNumber' : number,
}
export interface SmartChefType {
  'stakingTokenSymbol' : string,
  'startTime' : bigint,
  'rewardTokenSymbol' : string,
  'creator' : string,
  'stakingToken' : Token,
  'rewardToken' : Token,
  'name' : string,
  'createTime' : bigint,
  'stakingTokenFee' : bigint,
  'storageCid' : string,
  'rewardTokenFee' : bigint,
  'stakingTokenDecimals' : bigint,
  'bonusEndTime' : bigint,
  'rewardTokenDecimals' : bigint,
  'canisterId' : string,
}
export interface Token { 'address' : string, 'standard' : string }
export interface _SERVICE {
  'addControllers' : ActorMethod<[string, string], undefined>,
  'addIncentivesEntries' : ActorMethod<[PublicIncentive], undefined>,
  'createIncentive' : ActorMethod<[IncentiveKey, bigint], Result_4>,
  'createSingleSmartChef' : ActorMethod<[InitRequest], Result_4>,
  'cycleAvailable' : ActorMethod<[], bigint>,
  'cycleBalance' : ActorMethod<[], bigint>,
  'deleteSingleSmartList' : ActorMethod<[string], undefined>,
  'findIncentivesPoolsList' : ActorMethod<[bigint, bigint], Result_3>,
  'getCanister' : ActorMethod<[], Canisters>,
  'getGlobalData' : ActorMethod<[], Result_2>,
  'getSingleSmartGlobalData' : ActorMethod<[], Result_1>,
  'setHeartRate' : ActorMethod<[bigint], bigint>,
  'setSingleSmartChefAdmin' : ActorMethod<[string, string], undefined>,
  'setSwapFactoryCanister' : ActorMethod<[string], undefined>,
  'setSwapNFTCanisterId' : ActorMethod<[string], undefined>,
  'setSwapStakerCreateFarmsController' : ActorMethod<[string], undefined>,
  'setSwapStakerCreateTokenPoolsController' : ActorMethod<[string], undefined>,
  'setWICP' : ActorMethod<[Token], undefined>,
  'singleSmartChefList' : ActorMethod<[bigint, bigint], Result>,
  'startSingleSmart' : ActorMethod<[string, bigint, bigint], undefined>,
  'stopSingleSmart' : ActorMethod<[string], undefined>,
}
