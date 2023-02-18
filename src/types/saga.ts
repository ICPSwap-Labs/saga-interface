import type { EventNode } from "did/saga.did";
import { Principal } from "@dfinity/principal";

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
