import type { Principal } from '@dfinity/principal';
export interface AllowanceRequest {
  'token' : TokenIndex,
  'owner' : User,
  'spender' : User,
}
export interface ApproveAllRequest { 'approved' : boolean, 'spender' : User }
export interface ApproveRequest { 'token' : TokenIndex, 'spender' : User }
export type Balance = bigint;
export interface BalanceRequest { 'token' : TokenIndex, 'user' : User }
export type Balance__1 = bigint;
export type BoolResult = { 'ok' : boolean } |
  { 'err' : string };
export interface KVPair { 'k' : string, 'v' : string }
export type Memo = string;
export interface MintRequest {
  'owner' : User,
  'link' : string,
  'name' : string,
  'filePath' : string,
  'fileType' : string,
  'introduction' : string,
  'attributes' : Array<KVPair>,
  'royalties' : bigint,
  'nftType' : string,
  'image' : string,
  'artistName' : string,
}
export interface MintRequests {
  'owner' : User,
  'link' : string,
  'name' : string,
  'count' : bigint,
  'filePath' : string,
  'fileType' : string,
  'introduction' : string,
  'attributes' : Array<KVPair>,
  'royalties' : bigint,
  'nftType' : string,
  'image' : string,
  'artistName' : string,
}
export type NatResult = { 'ok' : bigint } |
  { 'err' : string };
export interface Page {
  'content' : Array<TransferRecord>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export interface Page_1 {
  'content' : Array<TokenMetadata>,
  'offset' : bigint,
  'limit' : bigint,
  'totalElements' : bigint,
}
export type ResponseResult = { 'ok' : TokenIndex__1 } |
  { 'err' : string };
export type ResponseResult_1 = { 'ok' : TokenMetadata } |
  { 'err' : string };
export type ResponseResult_2 = { 'ok' : [bigint, bigint] } |
  { 'err' : string };
export type ResponseResult_3 = { 'ok' : Array<string> } |
  { 'err' : string };
export type ResponseResult_4 = { 'ok' : Page } |
  { 'err' : string };
export type ResponseResult_5 = { 'ok' : Page_1 } |
  { 'err' : string };
export type ResponseResult_6 = { 'ok' : [bigint, bigint, string, string] } |
  { 'err' : string };
export type ResponseResult_7 = { 'ok' : Balance__1 } |
  { 'err' : string };
export type ResponseResult_8 = { 'ok' : boolean } |
  { 'err' : string };
export type TextResult = { 'ok' : string } |
  { 'err' : string };
export type TokenIndex = bigint;
export type TokenIndex__1 = bigint;
export interface TokenMetadata {
  'cId' : string,
  'tokenId' : bigint,
  'owner' : User,
  'link' : string,
  'name' : string,
  'minter' : User,
  'filePath' : string,
  'fileType' : string,
  'mintTime' : bigint,
  'introduction' : string,
  'attributes' : Array<KVPair>,
  'royalties' : bigint,
  'nftType' : string,
  'artistName' : string,
}
export interface TransferRecord {
  'to' : User,
  'tokenId' : TokenIndex,
  'from' : User,
  'hash' : string,
  'memo' : Memo,
  'time' : bigint,
  'tokenName' : string,
  'txType' : TxType,
  'caller' : User,
  'price' : Balance,
  'amount' : Balance,
}
export interface TransferRequest {
  'to' : User,
  'token' : TokenIndex,
  'from' : User,
  'memo' : Memo,
  'amount' : Balance,
}
export type TxType = { 'handsel' : null } |
  { 'mint' : null } |
  { 'transaction' : null };
export type User = string;
export type User__1 = string;
export interface _SERVICE {
  '_burn' : (arg_0: bigint) => Promise<ResponseResult_8>,
  'addAdmin' : (arg_0: string) => Promise<BoolResult>,
  'allowance' : (arg_0: AllowanceRequest) => Promise<ResponseResult_7>,
  'allowanceAll' : (arg_0: AllowanceRequest) => Promise<BoolResult>,
  'approve' : (arg_0: ApproveRequest) => Promise<BoolResult>,
  'approveAll' : (arg_0: ApproveAllRequest) => Promise<BoolResult>,
  'approveForAll' : (arg_0: ApproveAllRequest) => Promise<BoolResult>,
  'balance' : (arg_0: BalanceRequest) => Promise<NatResult>,
  'bearer' : (arg_0: TokenIndex__1) => Promise<TextResult>,
  'cycleAvailable' : () => Promise<bigint>,
  'cycleBalance' : () => Promise<bigint>,
  'findMatchNFTLists' : (
      arg_0: string,
      arg_1: Array<KVPair>,
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<ResponseResult_5>,
  'findMintConfig' : () => Promise<ResponseResult_6>,
  'findSeriesType' : () => Promise<ResponseResult_3>,
  'findTokenList' : (arg_0: User__1, arg_1: bigint, arg_2: bigint) => Promise<
      ResponseResult_5
    >,
  'findTokenMarket' : (
      arg_0: Array<string>,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<ResponseResult_5>,
  'findTokenTxRecord' : (
      arg_0: User__1,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<ResponseResult_4>,
  'findTxRecord' : (
      arg_0: TokenIndex__1,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<ResponseResult_4>,
  'getAdminList' : () => Promise<ResponseResult_3>,
  'getNftStat' : () => Promise<ResponseResult_2>,
  'metadata' : (arg_0: TokenIndex__1) => Promise<ResponseResult_1>,
  'mint' : (arg_0: MintRequest) => Promise<ResponseResult>,
  'mint_batch' : (arg_0: MintRequests) => Promise<ResponseResult>,
  'ownerNFTCount' : (arg_0: User__1) => Promise<NatResult>,
  'removeAdmin' : (arg_0: string) => Promise<BoolResult>,
  'setMintConfig' : (
      arg_0: bigint,
      arg_1: bigint,
      arg_2: string,
      arg_3: string,
    ) => Promise<BoolResult>,
  'setOwner' : (arg_0: string) => Promise<undefined>,
  'setSeriesType' : (arg_0: string, arg_1: boolean) => Promise<BoolResult>,
  'setSwapPositionManager' : (arg_0: string) => Promise<undefined>,
  'supply' : () => Promise<NatResult>,
  'swapPositionManager' : () => Promise<string>,
  'transfer' : (arg_0: TransferRequest) => Promise<NatResult>,
  'updateCanisterImage' : (arg_0: string) => Promise<undefined>,
}
