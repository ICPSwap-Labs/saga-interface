import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type AccountIdentifier = string;
export interface Deposit {
  'tokenId' : bigint,
  'numberOfStakes' : bigint,
  'tickUpper' : bigint,
  'owner' : string,
  'pool' : string,
  'tokenMetadata' : TokenMetadata,
  'holder' : string,
  'tickLower' : bigint,
}
export type Error = { 'CommonError' : null } |
  { 'InternalError' : string } |
  { 'UnsupportedToken' : string } |
  { 'InsufficientFunds' : null };
export interface InitProxyCanister {
  'swapNFTCid' : string,
  'lockCid' : string,
  'WICP' : Token,
  'swapStakerControllerCid' : string,
  'swapFactoryCid' : string,
}
export interface KVPair { 'k' : string, 'v' : string }
export interface Page {
  'content' : Array<TokenMetadata__1>,
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
export type Result = { 'ok' : string } |
  { 'err' : Error };
export type Result_1 = { 'ok' : string } |
  { 'err' : string };
export type Result_2 = { 'ok' : Stake } |
  { 'err' : Error };
export type Result_3 = { 'ok' : RewardInfo } |
  { 'err' : Error };
export type Result_4 = { 'ok' : PublicIncentive } |
  { 'err' : Error };
export type Result_5 = { 'ok' : Deposit } |
  { 'err' : Error };
export type Result_6 = { 'ok' : Page } |
  { 'err' : Error };
export type Result_7 = { 'ok' : bigint } |
  { 'err' : bigint };
export interface RewardInfo { 'reward' : bigint, 'secondsInsideX128' : bigint }
export interface Stake {
  'liquidityNoOverflow' : bigint,
  'secondsPerLiquidityInsideInitialX128' : bigint,
  'liquidityIfOverflow' : bigint,
}
export interface SwapStaker {
  'addAdmin' : ActorMethod<[string], boolean>,
  'cycleAvailable' : ActorMethod<[], Result_7>,
  'cycleBalance' : ActorMethod<[], Result_7>,
  'endIncentive' : ActorMethod<[], Result>,
  'findUserIncentivesTokenids' : ActorMethod<[User, bigint, bigint], Result_6>,
  'getAdminList' : ActorMethod<[], Array<string>>,
  'getDeposits' : ActorMethod<[bigint], Result_5>,
  'getIncentives' : ActorMethod<[User], Result_4>,
  'getRewardInfo' : ActorMethod<[Array<bigint>], Result_3>,
  'getStakes' : ActorMethod<[bigint], Result_2>,
  'initIncentives' : ActorMethod<[PublicIncentive], undefined>,
  'isAdmin' : ActorMethod<[string], boolean>,
  'openReward' : ActorMethod<[bigint], undefined>,
  'removeAdmin' : ActorMethod<[string], boolean>,
  'setHeartFeeRate' : ActorMethod<[bigint], undefined>,
  'setStorageCid' : ActorMethod<[string], undefined>,
  'setWicpCanisterId' : ActorMethod<[Token], undefined>,
  'stakeTokenids' : ActorMethod<[bigint], Result>,
  'transferToken' : ActorMethod<[bigint], Result_1>,
  'unstakeTokenids' : ActorMethod<[bigint], Result>,
}
export interface Token { 'address' : string, 'standard' : string }
export type TokenIndex = number;
export interface TokenMetadata {
  'cId' : string,
  'tokenId' : TokenIndex,
  'owner' : AccountIdentifier,
  'metadata' : [] | [Array<number>],
  'link' : string,
  'name' : string,
  'minter' : AccountIdentifier,
  'filePath' : string,
  'fileType' : string,
  'mintTime' : bigint,
  'introduction' : string,
  'attributes' : Array<KVPair>,
  'royalties' : bigint,
  'nftType' : string,
  'artistName' : string,
}
export interface TokenMetadata__1 {
  'cId' : string,
  'tokenId' : TokenIndex,
  'owner' : AccountIdentifier,
  'metadata' : [] | [Array<number>],
  'link' : string,
  'name' : string,
  'minter' : AccountIdentifier,
  'filePath' : string,
  'fileType' : string,
  'mintTime' : bigint,
  'introduction' : string,
  'attributes' : Array<KVPair>,
  'royalties' : bigint,
  'nftType' : string,
  'artistName' : string,
}
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE extends SwapStaker {}
