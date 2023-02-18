import { Token } from "@icpswap/sdk";
import { ICSCanisterId, WICPCanisterId } from "constants/canister";
import ICPAvatar from "../assets/images/icons/tokens/icp.svg";
import { TokenInfo, TokenMetadata } from "types/token";
import { Principal } from "@dfinity/principal";
import { XTCCanisterId } from "constants/dip20/index";
import { TOKEN_STANDARD } from "@icpswap/calls";
import { LEDGER_CANISTER_ID } from "constants/icp";

export { TOKEN_STANDARD };

export const ICS_METADATA: TokenMetadata = {
  standardType: TOKEN_STANDARD.EXT,
  ownerAccount: "",
  metadata: [],
  name: "ICS Test Token",
  decimals: 8,
  symbol: "ICST",
  canisterId: Principal.fromText(ICSCanisterId || "aaaaa-aa"),
};

export const ICS_TOKEN_INFO: TokenInfo = {
  logo: "data:image/png;base64,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",
  name: ICS_METADATA.name,
  symbol: ICS_METADATA.symbol,
  decimals: ICS_METADATA.decimals,
  canisterId: ICS_METADATA.canisterId.toString(),
  _canisterId: ICS_METADATA.canisterId,
  timestamp: BigInt(new Date("2021-12-12").getTime()),
  totalSupply: BigInt(100000000000000000),
  transFee: BigInt(0),
  ownerAccount: "",
  metadata: [],
  standardType: TOKEN_STANDARD.EXT,
  totalHolders: BigInt(0),
};

export const ICS = new Token({
  address: ICS_TOKEN_INFO.canisterId,
  decimals: ICS_TOKEN_INFO.decimals,
  symbol: ICS_TOKEN_INFO.symbol,
  logo: ICS_TOKEN_INFO.logo,
  name: ICS_TOKEN_INFO.name,
  standard: TOKEN_STANDARD.EXT,
  transFee: Number(ICS_TOKEN_INFO.transFee),
});

export const WRAPPED_ICP_METADATA: TokenMetadata = {
  standardType: TOKEN_STANDARD.EXT,
  ownerAccount: "",
  metadata: [],
  name: "Wrapped ICP",
  decimals: 8,
  symbol: "WICP",
  canisterId: Principal.fromText(WICPCanisterId ?? "aaaaa-aa"),
};

export const WRAPPED_ICP_TOKEN_INFO: TokenInfo = {
  ...WRAPPED_ICP_METADATA,
  logo: `data:image/jpeg;base64,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`,
  timestamp: null,
  totalSupply: BigInt(100000000000000000),
  transFee: BigInt(0),
  canisterId: WRAPPED_ICP_METADATA.canisterId.toString(),
  _canisterId: WRAPPED_ICP_METADATA.canisterId,
  totalHolders: BigInt(0),
};

export const WRAPPED_ICP = new Token({
  address: WRAPPED_ICP_TOKEN_INFO.canisterId,
  decimals: WRAPPED_ICP_TOKEN_INFO.decimals,
  symbol: WRAPPED_ICP_TOKEN_INFO.symbol,
  name: WRAPPED_ICP_TOKEN_INFO.name,
  logo: WRAPPED_ICP_TOKEN_INFO.logo,
  standard: TOKEN_STANDARD.EXT,
  transFee: Number(WRAPPED_ICP_TOKEN_INFO.transFee),
});

export const ICP_METADATA: TokenMetadata = {
  symbol: "ICP",
  name: "Internet Computer",
  decimals: 8,
  canisterId: Principal.fromText(LEDGER_CANISTER_ID),
  ownerAccount: "",
  metadata: [],
  standardType: TOKEN_STANDARD.ICP,
};

export const ICP_TOKEN_INFO: TokenInfo = {
  ...ICP_METADATA,
  timestamp: BigInt(new Date("2020-05-10").getTime()),
  canisterId: ICP_METADATA.canisterId.toString(),
  _canisterId: ICP_METADATA.canisterId,
  transFee: BigInt(10000),
  totalSupply: BigInt(200000000000000),
  logo: ICPAvatar,
  totalHolders: BigInt(0),
};

export const ICP = new Token({
  address: ICP_TOKEN_INFO.canisterId,
  decimals: ICP_TOKEN_INFO.decimals,
  symbol: ICP_TOKEN_INFO.symbol,
  name: ICP_TOKEN_INFO.name,
  logo: ICP_TOKEN_INFO.logo,
  standard: TOKEN_STANDARD.ICP,
  transFee: Number(ICP_TOKEN_INFO.transFee),
});

export const XTC_METADATA: TokenMetadata = {
  standardType: TOKEN_STANDARD.DIP20_XTC,
  ownerAccount: "",
  metadata: [],
  name: "Cycles",
  decimals: 12,
  symbol: "XTC",
  canisterId: Principal.fromText(XTCCanisterId),
};

export const DISPLAY_IN_WALLET_FOREVER = [ICP.address, XTC_METADATA.canisterId.toString(), WRAPPED_ICP.address];