import { PublicIncentive, SmartChefType, StakingPoolInfo } from "types/staking";

export enum POOL_STATE {
  LIVE = "Live",
  CLOSURE = "Closure",
  UNSTARTED = "Unstarted",
  FINISHED = "Finished",
}

export function getFarmsState(pool: PublicIncentive): POOL_STATE {
  if (pool.status.toLowerCase() === POOL_STATE.CLOSURE.toLowerCase()) return POOL_STATE.CLOSURE;

  const now = BigInt(new Date().getTime());
  const end = pool.endTime * BigInt(1000);
  const start = pool.startTime * BigInt(1000);

  if (now < start) return POOL_STATE.UNSTARTED;
  if (now > end) return POOL_STATE.FINISHED;

  return POOL_STATE.LIVE;
}

export function getPoolState(pool: SmartChefType): POOL_STATE {
  const now = BigInt(new Date().getTime());
  const end = pool.bonusEndTime * BigInt(1000);
  const start = pool.startTime * BigInt(1000);

  if (now < start) return POOL_STATE.UNSTARTED;
  if (now > end) return POOL_STATE.FINISHED;

  return POOL_STATE.LIVE;
}

export function getPoolStateByInfo(poolInfo: StakingPoolInfo | undefined, pool: SmartChefType): POOL_STATE {
  if (!poolInfo) return POOL_STATE.CLOSURE;

  const now = BigInt(new Date().getTime());
  const end = poolInfo.bonusEndTime * BigInt(1000);
  const start = pool.startTime * BigInt(1000);

  if (now < start) return POOL_STATE.UNSTARTED;
  if (now > end) return POOL_STATE.FINISHED;

  return POOL_STATE.LIVE;
}
