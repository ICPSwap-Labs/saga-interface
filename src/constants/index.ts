import { host } from "./server";
import { actor, Connector } from "@icpswap/calls";

actor.setHost(host);
actor.setConnector(Connector.ICPSwap);

export const SAGA_ID = "fug7i-ciaaa-aaaak-aee4q-cai";
