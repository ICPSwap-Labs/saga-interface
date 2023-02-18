export type {
  QueryPositionResult as PositionResult,
  IncreaseLiquidityParams,
  DecreaseLiquidityParams,
  LiquidityType as IncreaseLiquidityResult,
  ResultAmount as DecreaseLiquidityResult,
  PoolKey,
  TVLResult,
  MintResult,
  TickLiquidityInfo,
  ResultAmount as CollectResult,
  CollectParams,
  VolumeMapType as VolumeResult,
} from "declaration/icpswap-v2/SwapPositionManager.did";
export type { PoolInfo } from "declaration/icpswap-v2/SwapFactory.did";

export type { TransactionsType as SwapRecordInfo } from "declaration/ICS-Graph/BaseDataStructure.did";
export type { PublicPoolOverView as SwapPoolRecord } from "declaration/ICS-Graph/Pools.did";

export type { PoolInfo as SwapPoolInfo } from "declaration/icpswap-v2/SwapPool.did";
