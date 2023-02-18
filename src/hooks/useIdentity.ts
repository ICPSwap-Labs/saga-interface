import { ICPSwapMnemonic } from "@icpswap/wallet";
import { CallIdentity } from "types";
import { keys } from "constants/key";
import { getKey, useKey } from "store/global/hooks";
import { useEffect, useMemo, useState } from "react";

export async function getIdentity(): Promise<CallIdentity> {
  const key = keys[getKey()];
  return await ICPSwapMnemonic.toIdentity(key);
}

export function useIdentity() {
  const [identity, setIdentity] = useState<CallIdentity | undefined>(undefined);
  const key = useKey();

  useEffect(() => {
    const call = async () => {
      const _key = keys[key];

      const identity = await ICPSwapMnemonic.toIdentity(_key);
      setIdentity(identity);
    };

    call();
  }, [key]);

  return useMemo(() => identity, [identity]);
}
