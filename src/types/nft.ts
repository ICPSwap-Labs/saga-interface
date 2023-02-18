import { TransferRecord as _TransferRecord } from "declaration/nft/V3NFT.did";

export type {
  TransferRequest,
  TransferResponse,
  AllowanceRequest,
  ApproveRequest,
} from "declaration/nft/NFTDynamicCanister.did";

export type { NftStatInfo as V3SwapNFTStat } from "declaration/icpswap-v2/V3SwapNFTCanister.did";

export type { SaleRequest, BuyRequest, RevokeRequest } from "declaration/nft/V3TradeCanister.did";

export type { CanisterInfo as NFTCanisterInfo, CanisterRequest } from "declaration/nft/V3NFTCanisterController.did";

export type { IcsMintRequests, IcsMetadata as NFTTokenMetadata } from "declaration/nft/NFTDynamicCanister.did";

export type { TradeStatResp as CollectionTradeData } from "declaration/nft/V3TradeStat.did";

export type Allowance = {
  spender: string;
  tokenIndex: number;
};

export type TradeOrder = {
  hash: string;
  cid: string;
  nftCid: string;
  tokenIndex: bigint;
  name: string;
  introduction: string;
  artistName: string;
  royalties: bigint;
  link: string;
  filePath: string;
  fileType: string;
  price: bigint;
  seller: string;
  minter: string;
  time: bigint;
};

export type TxRecord = {
  hash: string;
  cid: string;
  nftCid: string;
  tokenIndex: bigint;
  name: string;
  seller: string;
  buyer: string;
  minter: string;
  price: bigint;
  txFee: bigint;
  royaltiesFee: bigint;
  settleAmount: bigint;
  txStatus: string;
  txFeeStatus: string;
  royaltiesFeeStatus: string;
  settleAmountStatus: string;
  time: bigint;
  filePath: string;
  fileType: string;
};

export type NFTBuyRequest = {
  nftCid: string;
  tokenIndex: number;
};

export type TransferRecord = _TransferRecord;

export type SocialMedialLink = {
  label: string;
  value: string;
};
export interface CanisterCreateDetails {
  royalties: string;
  name: string;
  image: string;
  introduction: string;
  minter: string;
  socialMediaLinks: SocialMedialLink[];
}
