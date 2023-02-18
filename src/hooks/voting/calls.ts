import { useMemo } from "react";
import { UserVotePowersInfo } from "types/voting";
import { useUserVotingPowers } from "@icpswap/calls";

export function useUserVotePower(
  canisterId: string,
  id: string | undefined,
  address: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean
) {
  const { result: powers, loading } = useUserVotingPowers(canisterId, id, address, offset, limit, reload);

  return useMemo(() => {
    const { content } = powers ?? { content: [] as UserVotePowersInfo[] };
    const power = content[0]?.availablePowers ?? BigInt(0);

    return {
      loading,
      result: power,
    };
  }, [loading, powers]);
}
