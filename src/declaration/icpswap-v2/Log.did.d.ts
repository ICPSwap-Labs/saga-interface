import type { Principal } from '@dfinity/principal';
export interface LogInfo {
  'cid' : string,
  'method' : string,
  'lineNum' : [] | [bigint],
  'level' : string,
  'message' : string,
  'timestamp' : bigint,
  'stackInfo' : [] | [string],
}
export interface Page {
  'content' : Array<LogInfo>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export type ResponseResult = { 'ok' : Page } |
  { 'err' : string };
export interface _SERVICE {
  'deBug' : (arg_0: string, arg_1: string, arg_2: [] | [bigint]) => Promise<
      boolean
    >,
  'error' : (
      arg_0: string,
      arg_1: string,
      arg_2: [] | [string],
      arg_3: [] | [bigint],
    ) => Promise<boolean>,
  'findLog' : (
      arg_0: [] | [string],
      arg_1: [] | [string],
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<ResponseResult>,
  'findLogList' : (arg_0: bigint, arg_1: bigint) => Promise<ResponseResult>,
  'findLogPage' : (
      arg_0: [] | [string],
      arg_1: [] | [string],
      arg_2: [] | [string],
      arg_3: bigint,
      arg_4: bigint,
    ) => Promise<ResponseResult>,
  'info' : (arg_0: string, arg_1: string, arg_2: [] | [bigint]) => Promise<
      boolean
    >,
}
