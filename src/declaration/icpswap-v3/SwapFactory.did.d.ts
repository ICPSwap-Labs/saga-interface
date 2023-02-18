import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Config {
  'id' : string,
  'value' : Value,
  'appName' : [] | [string],
  'version' : number,
  'group' : string,
  'category' : [] | [string],
  'namespace' : string,
}
export interface CreatePoolArgs {
  'fee' : bigint,
  'sqrtPriceX96' : string,
  'token0' : Token,
  'token1' : Token,
}
export type Error = { 'CommonError' : null } |
  { 'InternalError' : string } |
  { 'UnsupportedToken' : string } |
  { 'InsufficientFunds' : null };
export interface GetPoolArgs {
  'fee' : bigint,
  'token0' : Token,
  'token1' : Token,
}
export interface PoolData {
  'fee' : bigint,
  'key' : string,
  'tickSpacing' : bigint,
  'token0' : Token,
  'token1' : Token,
  'canisterId' : Principal,
}
export type Result = { 'ok' : Array<PoolData> } |
  { 'err' : Error };
export type Result_1 = { 'ok' : PoolData } |
  { 'err' : Error };
export interface SwapFactory {
  'createPool' : ActorMethod<[CreatePoolArgs], Result_1>,
  'getConfigs' : ActorMethod<[], Array<Config>>,
  'getPool' : ActorMethod<[GetPoolArgs], Result_1>,
  'getPools' : ActorMethod<[], Result>,
  'onMessage' : ActorMethod<[Array<Config>], undefined>,
  'register' : ActorMethod<[], undefined>,
}
export interface Token { 'address' : string, 'standard' : string }
export type Value = { 'Map' : Array<[string, Value]> } |
  { 'List' : Array<Value> } |
  { 'Text' : string };
export interface _SERVICE extends SwapFactory {}
