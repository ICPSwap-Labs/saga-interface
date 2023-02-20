import { CallIdentity } from "types/index";
import { actor } from "actor/actor";
import { idlFactory } from "did/saga";
import { _SERVICE } from "did/saga.did";
import { host } from "constants/server";
import { SAGA_ID } from "constants/index";

export const saga = (identity?: CallIdentity) => {
  return actor.create<_SERVICE>({
    canisterId: SAGA_ID,
    idlFactory: idlFactory,
    identity,
    host,
  });
};
