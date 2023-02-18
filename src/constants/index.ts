import { host } from "./server";
import { actor, Connector } from "@icpswap/calls";

actor.setHost(host);
actor.setConnector(Connector.ICPSwap);
