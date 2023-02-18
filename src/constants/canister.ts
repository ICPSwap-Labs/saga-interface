import { network, NETWORK, host } from "./server";
import { actor, Connector } from "@icpswap/calls";

let CanisterIdsJson: { [key: string]: { [key1: string]: string } } = {};

try {
  var context = require.context("../canister_ids_json", true, /\.json$/);

  context.keys().forEach(function (key: string) {
    let canister_ids = context(key);

    if (key.includes("icpswap-v2")) {
      canister_ids = {};
      Object.keys(context(key)).forEach((canisterName) => {
        canister_ids[`V2${canisterName}`] = context(key)[canisterName];
      });
    }

    if (
      (key.includes(network) && network !== NETWORK.IC) ||
      (network === NETWORK.IC && key.includes("canister_ids.json"))
    ) {
      CanisterIdsJson = {
        ...CanisterIdsJson,
        ...canister_ids,
        ...(key.includes("voting") && !!canister_ids["FileCanister"]
          ? { VotingFileCanister: canister_ids["FileCanister"] }
          : {}),
      };
    }
  });
} catch (error) {
  console.log(error);
}

const canisterIds: { [key: string]: string } = {};

for (const canister in CanisterIdsJson) {
  canisterIds[canister] = CanisterIdsJson[canister][network];
}

export const getCanisterId = (canisterName: string): string => {
  return canisterIds[canisterName];
};

export const CANISTER_NAMES = {
  TOKEN_CANISTER_CONTROLLER: "TokenCanisterController",
  TOKEN_SERVICE: "token",
  SWAP_POSITION_MANAGER: "SwapPositionManager",
  ICS: "ICS",
  WICP: network === NETWORK.IC ? "wicp" : "WICP_T",
  FILE: "FileAssets",
  NFTCanisterController: "V3NFTCanisterController",
  SwapNFTCanister: "V3SwapNFTCanister",
  V3NFTCanister: "NFTDynamicCanister",
  V3TradeStat: "V3TradeStat",
  NFTTrade: "V3TradeCanister",
  FileCanister: "FileCanister",
  SwapStakerController: "SwapStakerController",
  SingleSmartChef: "SingleSmartChef",
  SwapStaker: "SwapStaker",
  LaunchpadCanister: "LaunchpadCanister",
  IDOCanisterController: "LaunchpadController",
  LaunchpadManager: "LaunchpadManager",
  VOTE: "Vote",
  FileActor: "File",
  SwapRecord: "BaseDataStructure",
  SwapGraphPool: "Pools",
  TokenList: "TokenList",

  V3SwapFactory: "SwapFactory",
  V3SwapPool: "SwapPool",
  V3SwapNFT: "SwapNFT",

  ClaimStorage: "ClaimStorage",

  VotingFileCanister: "VotingFileCanister",
};

export const ICSCanisterId = getCanisterId(CANISTER_NAMES.ICS);
export const fileCanisterId = getCanisterId(CANISTER_NAMES.FILE);
export const WICPCanisterId = getCanisterId(CANISTER_NAMES.WICP);
export const swapPositionManagerCanisterId = getCanisterId(CANISTER_NAMES.SWAP_POSITION_MANAGER);
export const SwapNFTCanisterId = getCanisterId(CANISTER_NAMES.SwapNFTCanister);
export const swapStakerControllerCanisterId = getCanisterId(CANISTER_NAMES.SwapStakerController);
export const NFTCanisterController = getCanisterId(CANISTER_NAMES.NFTCanisterController);
export const FileCanisterId = getCanisterId(CANISTER_NAMES.FileActor);
export const ClaimStorageId = getCanisterId(CANISTER_NAMES.ClaimStorage);

// TODO
export const NFTTradeTokenCanisterId = WICPCanisterId;
export const LaunchpadStakingTokenCanisterId = WICPCanisterId;

export const V3SwapNFTCanisterId = getCanisterId(CANISTER_NAMES.V3SwapNFT);
export const VotingFileCanisterId = getCanisterId(CANISTER_NAMES.VotingFileCanister);

actor.setHost(host);
actor.setConnector(Connector.ICPSwap);

export const ALL_CANISTER_IDS = [...Object.values(canisterIds)];

export { canisterIds };
