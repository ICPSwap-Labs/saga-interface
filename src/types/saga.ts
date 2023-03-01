import type { EventNode } from "did/saga.did";
import { Principal } from "@dfinity/principal";

export type { EventRequest, EventNodeRequest, ArgValue, Log, NodeLog } from "did/saga.did";

export enum ArgKey {
  I64 = "I64",
  U64 = "U64",
  Vec = "Vec",
  Slice = "Slice",
  Text = "Text",
  Bool = "Bool",
  Principal = "Principal",
}

export type ArgTypes = {
  [ArgKey.I64]: bigint;
  [ArgKey.U64]: bigint;
  [ArgKey.Vec]: Array<ArgKey>;
  [ArgKey.Slice]: Uint8Array;
  [ArgKey.Text]: string;
  [ArgKey.Bool]: boolean;
  [ArgKey.Principal]: Principal;
};

export type Arg = { index: number; type: ArgKey; value: string };

export type Node = {
  name: string;
  id: string;
  func_name: string;
  compensate_func_name: string;
  next_node: string;
  _id: string;
};

export type Value = {
  name: string;
  comment: string;
};

export type EventLang = {
  owner: Principal;
  name: string;
  time: bigint;
  comment: string;
  nodes: Array<EventNode>;
  _id: string;
};
