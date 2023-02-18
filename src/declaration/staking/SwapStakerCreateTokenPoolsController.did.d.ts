import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

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
export type Result = { 'ok' : SmartChefType } |
  { 'err' : string };
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
  'createSingleSmartChef' : ActorMethod<[InitRequest], Result>,
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
