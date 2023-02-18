import { CallIdentity } from "types/index";
import { actor } from "@icpswap/calls";
import { idlFactory } from "did/saga";
import { _SERVICE } from "did/saga.did";
import { host } from "constants/server";

export const saga = (identity?: CallIdentity) => {
  return actor.create<_SERVICE>({
    canisterId: "qaa6y-5yaaa-aaaaa-aaafa-cai",
    idlFactory: idlFactory,
    identity,
    host,
  });
};
