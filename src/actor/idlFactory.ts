import { IDL } from "@dfinity/candid";

let idlFactories: {
  [key: string]: IDL.InterfaceFactory;
} = {};

var context = require.context("../declaration", true, /\.js$/);

context.keys().forEach(function (key: string) {
  const arr = key.split("/");
  let canisterName = arr[arr.length - 1].replace(".did.js", "");

  if (key.includes("icpswap-v3")) {
    canisterName = `V3${canisterName}`;
  }

  const { idlFactory } = context(key);

  idlFactories[canisterName] = idlFactory;
});

export const getIdlFactory = (canisterName: string) => idlFactories[canisterName];

export default idlFactories;
