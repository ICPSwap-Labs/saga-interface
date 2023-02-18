import { Override } from "@icpswap/sdk";
import { QueryPositionResult as PositionResult } from "declaration/icpswap-v2/SwapPositionManager.did";

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

export type { TransactionsType as SwapRecordInfo } from "constants/v2/BaseDataStructure.did";
export type { PublicPoolOverView as SwapPoolRecord } from "constants/v2/Pools.did";

export type UserPosition = Override<PositionResult, { id: bigint }>;

export type { PoolInfo as SwapPoolInfo } from "declaration/icpswap-v2/SwapPool.did";
