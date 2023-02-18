export enum NETWORK {
  IC = "ic",
  TEST = "test",
  LOCAL = "local",
}

export const hostMap = {
  [NETWORK.LOCAL]: `http://localhost:8000`,
  [NETWORK.TEST]: "https://dtest.app",
  [NETWORK.IC]: "https://ic0.app",
};

export const network = process.env.REACT_APP_IC_NETWORK as NETWORK;

export const isIC: boolean = network === NETWORK.IC;
export const isTest: boolean = network === NETWORK.TEST;
export const isLocal: boolean = network === NETWORK.LOCAL;

export const host = hostMap[network];
