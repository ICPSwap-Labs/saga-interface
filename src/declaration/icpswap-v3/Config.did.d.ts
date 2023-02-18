import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Client { 'principal' : Principal, 'memo' : string }
export interface Config {
  'id' : string,
  'value' : Value,
  'appName' : [] | [string],
  'version' : number,
  'group' : string,
  'category' : [] | [string],
  'namespace' : string,
}
export type Error = { 'CommonError' : string } |
  { 'RecordExists' : string } |
  { 'NotExists' : string } |
  { 'ReferentialConstraint' : string };
export interface Group { 'id' : string, 'name' : string, 'namespace' : string }
export interface Namespace { 'id' : string, 'name' : string }
export interface Permission {
  'id' : string,
  'writable' : boolean,
  'readable' : boolean,
  'group' : string,
  'namespace' : string,
}
export type Result = { 'ok' : Role } |
  { 'err' : Error };
export type Result_1 = { 'ok' : Permission } |
  { 'err' : Error };
export type Result_10 = { 'ok' : Client } |
  { 'err' : Error };
export type Result_11 = { 'ok' : { 'permission' : string, 'role' : string } } |
  { 'err' : Error };
export type Result_12 = { 'ok' : { 'client' : Principal, 'role' : string } } |
  { 'err' : Error };
export type Result_13 = { 'ok' : Group } |
  { 'err' : Error };
export type Result_2 = { 'ok' : Namespace } |
  { 'err' : Error };
export type Result_3 = { 'ok' : Config } |
  { 'err' : Error };
export type Result_4 = { 'ok' : Principal } |
  { 'err' : Error };
export type Result_5 = { 'ok' : Array<Role> } |
  { 'err' : Error };
export type Result_6 = { 'ok' : Array<Permission> } |
  { 'err' : Error };
export type Result_7 = { 'ok' : Array<Namespace> } |
  { 'err' : Error };
export type Result_8 = { 'ok' : Array<Config> } |
  { 'err' : Error };
export type Result_9 = { 'ok' : Array<Client> } |
  { 'err' : Error };
export interface Role { 'id' : string, 'name' : string }
export interface Service {
  'addClient' : ActorMethod<[Client], Result_4>,
  'addClientRole' : ActorMethod<[Principal, string], Result_12>,
  'addConfig' : ActorMethod<[Config], Result_3>,
  'addGroup' : ActorMethod<[Group], Result_13>,
  'addNamespace' : ActorMethod<[Namespace], Result_2>,
  'addPermission' : ActorMethod<[Permission], Result_1>,
  'addRole' : ActorMethod<[Role], Result>,
  'addRolePermission' : ActorMethod<[string, string], Result_11>,
  'deleteClient' : ActorMethod<[Principal], Result_10>,
  'deleteClientRole' : ActorMethod<[Principal, string], Result_12>,
  'deleteConfig' : ActorMethod<[string, string, string], Result_3>,
  'deleteNamespace' : ActorMethod<[string], Result_2>,
  'deletePermission' : ActorMethod<[string], Result_1>,
  'deleteRole' : ActorMethod<[string], Result>,
  'deleteRolePermission' : ActorMethod<[string, string], Result_11>,
  'getClientByPrincipal' : ActorMethod<[Principal], Result_10>,
  'getClientRoles' : ActorMethod<[Principal], Result_5>,
  'getClients' : ActorMethod<[], Result_9>,
  'getConfigs' : ActorMethod<[string, string], Result_8>,
  'getNamespaces' : ActorMethod<[], Result_7>,
  'getPermissionById' : ActorMethod<[string], Result_1>,
  'getPermissions' : ActorMethod<[], Result_6>,
  'getRoleById' : ActorMethod<[string], Result>,
  'getRolePermissions' : ActorMethod<[string], Result_6>,
  'getRoles' : ActorMethod<[], Result_5>,
  'sendMessage' : ActorMethod<[], undefined>,
  'subscribe' : ActorMethod<[string, [Principal, string]], undefined>,
  'updateClient' : ActorMethod<[Client], Result_4>,
  'updateConfig' : ActorMethod<[Config], Result_3>,
  'updateNamespace' : ActorMethod<[Namespace], Result_2>,
  'updatePermission' : ActorMethod<[Permission], Result_1>,
  'updateRole' : ActorMethod<[Role], Result>,
}
export type Value = { 'Map' : Array<[string, Value]> } |
  { 'List' : Array<Value> } |
  { 'Text' : string };
export interface _SERVICE extends Service {}
