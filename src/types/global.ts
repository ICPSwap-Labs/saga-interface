import type { Ed25519KeyIdentity, Secp256k1KeyIdentity } from "@dfinity/identity";
import { ActorIdentity } from "@icpswap/calls";

export enum ResultStatus {
  ERROR = "err",
  OK = "ok",
}

export type StatusResult<T> = {
  readonly status: ResultStatus;
  readonly data: T | string;
};

export type StatusResult1<T> = {
  readonly status: ResultStatus;
  readonly data?: T;
  readonly message: string;
};

export type CallResult<T> = {
  readonly result: ApiResult<T>;
  readonly loading: boolean;
};

export type ApiResult<T> = undefined | T;

export type PaginationResult<T> = {
  totalElements: number;
  offset: number;
  limit: number;
  content: T[];
};

export type DynamicObject = {
  [key: string]: any;
};

export type ICPIdentity = Ed25519KeyIdentity | Secp256k1KeyIdentity;

export type Identity = ActorIdentity;
export type CallIdentity = Ed25519KeyIdentity;

export type Override<P, S> = Omit<P, keyof S> & S;
