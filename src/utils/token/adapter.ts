import { actor, ActorIdentity } from "@icpswap/calls";
import { Principal } from "@dfinity/principal";
import { enumResultFormat, isPrincipal } from "@icpswap/sdk";

import { idlFactory as OGY_IDL } from "constants/did/ogy.did";
import { _SERVICE as OGY_SERVICE } from "constants/did/ogy";

const ORG_ID = "rd6wb-lyaaa-aaaaj-acvla-cai";

const ogy = async (identity?: ActorIdentity) =>
  actor.create<OGY_SERVICE>({ canisterId: ORG_ID, idlFactory: OGY_IDL, identity });

const BALANCE_ADAPTER_IDS = [ORG_ID];

export const isNeedBalanceAdapter = (canisterId: string) => BALANCE_ADAPTER_IDS.includes(canisterId);

export async function balanceAdapter(canisterId: string, account: string | Principal, subaccount?: number[]) {
  switch (canisterId) {
    case ORG_ID:
      if (isPrincipal(account)) {
        return enumResultFormat<bigint>(await (await ogy()).balanceOf(account));
      } else {
        throw Error("not support address");
      }
    default:
      throw Error("no canister id");
      break;
  }
}
