import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface IncentiveKey {
  'startTime' : bigint,
  'rewardTokenSymbol' : string,
  'rewardToken' : Token,
  'endTime' : bigint,
  'pool' : string,
  'rewardTokenFee' : bigint,
  'rewardTokenDecimals' : bigint,
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
export type Result = { 'ok' : PublicIncentive } |
  { 'err' : string };
export interface Token { 'address' : string, 'standard' : string }
export interface _SERVICE {
  'createIncentive' : ActorMethod<[IncentiveKey, bigint], Result>,
  'getCanister' : ActorMethod<
    [],
    {
      'SwapStakerControllerCanisterId' : string,
      'SwapFactoryCanisterId' : string,
      'lockCid' : string,
      'WICP' : Token,
      'SwapNFTCid' : string,
    },
  >,
  'setHeartRate' : ActorMethod<[bigint], bigint>,
}
