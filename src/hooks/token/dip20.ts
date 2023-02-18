import { useCallback } from "react";
import { Identity as CallIdentity } from "types/global";
import { Principal } from "@dfinity/principal";
import { enumResultFormat } from "@icpswap/sdk";

export interface XTCTopUpProps {
  canisterId: string;
  amount: bigint | number;
  identity: CallIdentity;
}

export function useXTCTopUp() {
  return useCallback(async ({ canisterId, amount, identity }: XTCTopUpProps) => {
    return enumResultFormat<bigint>(1);
  }, []);
}
