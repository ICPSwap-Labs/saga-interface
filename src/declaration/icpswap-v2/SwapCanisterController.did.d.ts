import type { Principal } from '@dfinity/principal';
export type Address = string;
export interface CanisterView {
  'id' : string,
  'name' : string,
  'cycle' : bigint,
}
export type NatResult = { 'ok' : bigint } |
  { 'err' : string };
export type ResponseResult = { 'ok' : Array<CanisterView> } |
  { 'err' : string };
export interface _SERVICE {
  'addAdmin' : (arg_0: string) => Promise<boolean>,
  'addPoolAdmin' : (arg_0: string) => Promise<boolean>,
  'createSwapPoolCanister' : (
      arg_0: Address,
      arg_1: Address,
      arg_2: string,
      arg_3: Address,
      arg_4: string,
      arg_5: bigint,
      arg_6: bigint,
      arg_7: string,
    ) => Promise<Principal>,
  'cycleAvailable' : () => Promise<NatResult>,
  'cycleBalance' : () => Promise<NatResult>,
  'getAdminList' : () => Promise<Array<string>>,
  'getCanisters' : () => Promise<ResponseResult>,
  'getStatus' : (arg_0: Principal) => Promise<
      { 'settings' : { 'controllers' : Array<Principal> } }
    >,
  'getSwapFeeHolderCanisterId' : () => Promise<string>,
  'removeAdmin' : (arg_0: string) => Promise<boolean>,
  'resetController' : () => Promise<undefined>,
  'setSwapFeeHolderCanisterId' : (arg_0: string) => Promise<undefined>,
}
