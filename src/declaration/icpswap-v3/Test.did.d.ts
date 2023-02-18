import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type Amount = bigint;
export type Timestamp = bigint;
export type TransferError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'BadBurn' : { 'min_burn_amount' : Amount } } |
  { 'Duplicate' : { 'duplicate_of' : TxIndex } } |
  { 'BadFee' : { 'expected_fee' : Amount } } |
  { 'CreatedInFuture' : { 'ledger_time' : Timestamp } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : Amount } };
export type TransferFromError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'InsufficientAllowance' : { 'allowance' : Amount } } |
  { 'BadBurn' : { 'min_burn_amount' : Amount } } |
  { 'Duplicate' : { 'duplicate_of' : TxIndex } } |
  { 'BadFee' : { 'expected_fee' : Amount } } |
  { 'CreatedInFuture' : { 'ledger_time' : Timestamp } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : Amount } };
export type TransferFromResult = { 'Ok' : TxIndex } |
  { 'Err' : TransferFromError };
export type TransferResult = { 'Ok' : TxIndex } |
  { 'Err' : TransferError };
export type TxIndex = bigint;
export interface _SERVICE {
  'getSubaccount' : ActorMethod<[], string>,
  'testTokenAdapterBalanceOf' : ActorMethod<
    [string, string, Principal, [] | [Principal]],
    bigint,
  >,
  'testTokenAdapterTransfer' : ActorMethod<
    [string, string, [] | [Principal], Principal, [] | [Principal], Amount],
    TransferResult,
  >,
  'testTokenAdapterTransferFrom' : ActorMethod<
    [string, string, Principal, Principal, Amount],
    TransferFromResult,
  >,
}
