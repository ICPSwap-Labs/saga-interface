import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addAdmin' : ActorMethod<[string], boolean>,
  'addClient' : ActorMethod<[string], boolean>,
  'getAdminList' : ActorMethod<[], Array<string>>,
  'getAllLocks' : ActorMethod<[], Array<string>>,
  'getClientList' : ActorMethod<[], Array<string>>,
  'getLockState' : ActorMethod<[string], boolean>,
  'lock' : ActorMethod<[string], { 'time' : bigint, 'state' : boolean }>,
  'removeAdmin' : ActorMethod<[string], boolean>,
  'removeClient' : ActorMethod<[string], boolean>,
  'unlock' : ActorMethod<[string], undefined>,
}
