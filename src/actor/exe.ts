import { Arg } from "types/saga";
import { actor } from "actor/actor";
import { CallIdentity } from "types/index";
import { ActorSubclass } from "@dfinity/agent";
import type { ActorMethod } from "@dfinity/agent";

export const exe = async (canisterId: string, method: string, args: Arg[], identity?: CallIdentity) => {
  const idlFactory = ({ IDL }: any) => {
    return IDL.Service({
      [method]: IDL.Func([IDL.Text], [], ["query"]),
    });
  };

  const create_actor = () =>
    actor.create({ canisterId, idlFactory, identity }) as Promise<
      ActorSubclass<{
        get: ActorMethod<[string], []>;
      }>
    >;

  const _actor = await create_actor();

  return await _actor.get(args[0].value);
};
