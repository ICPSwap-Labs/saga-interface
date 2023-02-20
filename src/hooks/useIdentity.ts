import { Ed25519KeyIdentity } from "@dfinity/identity";
import { CallIdentity } from "types";
import { keys } from "constants/key";
import { getKey, useKey } from "store/global/hooks";
import { useEffect, useMemo, useState } from "react";

function getSeed(key: string) {
  const enc = new TextEncoder();
  const seed = enc.encode(key);
  return seed;
}

export async function getIdentity(): Promise<CallIdentity> {
  const key = keys[getKey()];
  return await Ed25519KeyIdentity.generate(getSeed(key));
}

export function useIdentity() {
  const [identity, setIdentity] = useState<CallIdentity | undefined>(undefined);
  const key = useKey();

  useEffect(() => {
    const call = async () => {
      const _key = keys[key];
      const identity = await Ed25519KeyIdentity.generate(getSeed(_key));
      setIdentity(identity);
    };

    call();
  }, [key]);

  return useMemo(() => identity, [identity]);
}
