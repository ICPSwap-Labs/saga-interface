import { ICPSwapMnemonic } from "@icpswap/wallet";
import { CallIdentity } from "types";
import { key0 } from "constants/key";

export async function getIdentity(): Promise<CallIdentity> {
  return await ICPSwapMnemonic.toIdentity(key0);
}
