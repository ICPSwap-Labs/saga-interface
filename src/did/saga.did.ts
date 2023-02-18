import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type ArgValue = { 'I64' : bigint } |
  { 'U64' : bigint } |
  { 'Vec' : Array<ArgValue> } |
  { 'Slice' : Array<number> } |
  { 'Text' : string } |
  { 'True' : null } |
  { 'False' : null } |
  { 'Float' : number } |
  { 'Principal' : Principal };
export interface EventLang {
  'owner' : Principal,
  'name' : string,
  'time' : bigint,
  'comment' : string,
  'nodes' : Array<EventNode>,
}
export interface EventLangRequest {
  'name' : string,
  'comment' : string,
  'nodes' : Array<EventNode>,
}
export interface EventNode {
  'cid' : string,
  'compensate_func_name' : string,
  'next_node' : string,
  'name' : string,
  'func_name' : string,
  'pre_node' : string,
}
export interface EventNodeRequest {
  'args' : Array<[string, ArgValue]>,
  'name' : string,
}
export interface EventRequest {
  'name' : string,
  'nodes' : Array<EventNodeRequest>,
}
export interface _SERVICE {
  'delete' : ActorMethod<[string], boolean>,
  'execute' : ActorMethod<[EventRequest], boolean>,
  'find' : ActorMethod<[], Array<EventLang>>,
  'get' : ActorMethod<[string], [] | [EventLang]>,
  'insert' : ActorMethod<[EventLangRequest], boolean>,
  'test' : ActorMethod<[string, string, Array<[string, ArgValue]>], boolean>,
}
