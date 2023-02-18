import { TokenSet } from "declaration/launchpad/LaunchpadManager.did";

export type { Property } from "declaration/launchpad/LaunchpadController.did";

export type { Investor } from "declaration/launchpad/LaunchpadManager.did";

export type { TokenSet };

export type Time = bigint;

export interface LaunchpadProperty {
  id: string;
  cid: string;
  receiveTokenDateTime: Time;
  creator: string;
  depositDateTime: [] | [Time];
  createdDateTime: Time;
  expectedFundraisingWICPQuantity: string;
  settled: [] | [boolean];
  name: string;
  description: string;
  soldQuantity: string;
  soldTokenId: string;
  withdrawalDateTime: [] | [Time];
  limitedAmountOnce: string;
  endDateTime: Time;
  fundraisingWICPQuantity: [] | [string];
  depositedQuantity: string;
  expectedSellQuantity: string;
  startDateTime: Time;
  initialExchangeRatio: string;
}

export interface UserStakingDetails {
  expectedBuyTokenQuantity: string;
  expectedDepositedWICPQuantity: string;
  finalTokenSet: TokenSet[];
  id: string;
  participatedDateTime: bigint;
  withdrawalDateTime: bigint[];
}
