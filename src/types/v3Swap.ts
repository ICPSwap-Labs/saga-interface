import { Override } from "@icpswap/sdk";
import { PoolData } from "@icpswap/calls/declaration/icpswap-v3/SwapFactory.did";

export type { PoolData } from "@icpswap/calls/declaration/icpswap-v3/SwapFactory.did";

export type {
  PoolMetadata,
  MintArgs,
  UserPositionInfo,
  IncreaseLiquidityArgs,
  DecreaseLiquidityArgs,
  SwapArgs,
  ClaimArgs,
  TickLiquidityInfo,
} from "@icpswap/calls/declaration/icpswap-v3/SwapPool.did";

export type { TokenMetadata as NFTTokenMetadata } from "@icpswap/calls/declaration/icpswap-v3/SwapNFT.did";

export type PositionDetail = {
  pool: string;
  token0: string;
  token1: string;
  fee: string;
  tickUpper: bigint;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
  feeGrowthInside1LastX128: bigint;
  liquidity: bigint;
  feeGrowthInside0LastX128: bigint;
  tickLower: bigint;
  positionId: string;
};

export type { TransactionsType as SwapRecordInfo } from "@icpswap/calls/declaration/ICS-Graph/BaseDataStructure.did";

export type UserSwapPoolsBalance = Override<
  PoolData,
  { type: "unDeposit" | "unUsed"; balance0: bigint; balance1: bigint }
>;

export type { PublicPoolOverView as SwapPoolRecord } from "declaration/ICS-Graph/Pools.did";
