import type { Principal } from '@dfinity/principal';
export type BoolResult = { 'ok' : boolean } |
  { 'err' : string };
export interface Chunk { 'content' : Array<number>, 'batch_id' : bigint }
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export interface KVPair { 'k' : string, 'v' : bigint }
export type NatResult = { 'ok' : bigint } |
  { 'err' : string };
export interface Page {
  'content' : Array<UserVotePowersInfo>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface Page_1 {
  'content' : Array<UserVoteRecord>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface Page_2 {
  'content' : Array<ProposalInfo>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface ProjectState {
  'tokenCid' : string,
  'logo' : string,
  'name' : string,
  'managerAddress' : string,
}
export interface ProposalInfo {
  'id' : string,
  'title' : string,
  'content' : string,
  'endTime' : bigint,
  'createTime' : bigint,
  'createUser' : string,
  'state' : bigint,
  'createAddress' : string,
  'beginTime' : bigint,
  'options' : Array<KVPair>,
}
export type ResponseResult = { 'ok' : ProposalInfo } |
  { 'err' : string };
export type ResponseResult_1 = { 'ok' : ProjectState } |
  { 'err' : string };
export type ResponseResult_2 = { 'ok' : Page } |
  { 'err' : string };
export type ResponseResult_3 = { 'ok' : Page_1 } |
  { 'err' : string };
export type ResponseResult_4 = { 'ok' : Page_2 } |
  { 'err' : string };
export interface StreamingCallbackHttpResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
}
export interface StreamingCallbackToken {
  'key' : string,
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : [Principal, string],
    }
  };
export type TextResult = { 'ok' : string } |
  { 'err' : string };
export interface UserVotePowersInfo {
  'availablePowers' : bigint,
  'address' : string,
  'usedPowers' : bigint,
}
export interface UserVoteRecord {
  'voteTime' : bigint,
  'address' : string,
  'usedProof' : bigint,
  'options' : Array<KVPair>,
}
export interface _SERVICE {
  'chunkSize' : () => Promise<bigint>,
  'clearChunk' : () => Promise<boolean>,
  'commit_batch' : (
      arg_0: {
        'batch_id' : bigint,
        'content_type' : string,
        'chunk_ids' : Array<bigint>,
      },
    ) => Promise<undefined>,
  'create' : (arg_0: ProposalInfo) => Promise<BoolResult>,
  'create_batch' : () => Promise<{ 'batch_id' : bigint }>,
  'create_chunk' : (arg_0: Chunk) => Promise<{ 'chunk_id' : bigint }>,
  'cycleAvailable' : () => Promise<NatResult>,
  'cycleBalance' : () => Promise<NatResult>,
  'findPage' : (
      arg_0: [] | [string],
      arg_1: [] | [bigint],
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<ResponseResult_4>,
  'findRecordPage' : (arg_0: string, arg_1: bigint, arg_2: bigint) => Promise<
      ResponseResult_3
    >,
  'findVotePower' : (
      arg_0: [] | [string],
      arg_1: [] | [string],
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<ResponseResult_2>,
  'getProject' : () => Promise<ResponseResult_1>,
  'getProposal' : (arg_0: string) => Promise<ResponseResult>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'http_request_streaming_callback' : (
      arg_0: StreamingCallbackToken,
    ) => Promise<StreamingCallbackHttpResponse>,
  'maxFileSize' : (arg_0: bigint) => Promise<TextResult>,
  'setOwner' : (arg_0: Principal) => Promise<BoolResult>,
  'setProject' : (arg_0: ProjectState) => Promise<BoolResult>,
  'setState' : (arg_0: string, arg_1: bigint) => Promise<BoolResult>,
  'setVotePower' : (arg_0: string, arg_1: Array<UserVotePowersInfo>) => Promise<
      BoolResult
    >,
  'vote' : (arg_0: string, arg_1: string, arg_2: bigint) => Promise<BoolResult>,
}
