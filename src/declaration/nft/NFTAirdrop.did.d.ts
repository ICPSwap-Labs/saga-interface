import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export interface SendBatchRequest {
  'tokens' : Array<TokenIndex>,
  'users' : Array<AccountIdentifier>,
}
export type TokenIndex = number;
export interface _SERVICE {
  'airdrop' : (arg_0: SendBatchRequest) => Promise<[boolean, string]>,
  'test' : () => Promise<string>,
}
