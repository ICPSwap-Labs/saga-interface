export const idlFactory = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
  const PublicIncentive = IDL.Record({
    'startTime' : IDL.Nat,
    'status' : IDL.Text,
    'rewardTokenSymbol' : IDL.Text,
    'numberOfStakes' : IDL.Nat,
    'incentiveCanisterId' : IDL.Text,
    'rewardToken' : Token,
    'totalLiquidity' : IDL.Nat,
    'endTime' : IDL.Nat,
    'incentive' : IDL.Text,
    'totalAmount0' : IDL.Int,
    'totalAmount1' : IDL.Int,
    'pool' : IDL.Text,
    'refundee' : IDL.Text,
    'totalRewardClaimed' : IDL.Nat,
    'stakesTokenIds' : IDL.Vec(IDL.Nat),
    'storageCid' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'poolToken0' : Token,
    'poolToken1' : Token,
    'poolFee' : IDL.Nat,
    'totalReward' : IDL.Nat,
    'userTotalAmount0' : IDL.Int,
    'userTotalAmount1' : IDL.Int,
    'rewardTokenDecimals' : IDL.Nat,
    'userNumberOfStakes' : IDL.Nat,
    'totalRewardUnclaimed' : IDL.Nat,
    'totalSecondsClaimedX128' : IDL.Nat,
    'userTotalLiquidity' : IDL.Nat,
  });
  const InitProxyCanister = IDL.Record({
    'swapNFTCid' : IDL.Text,
    'lockCid' : IDL.Text,
    'WICP' : Token,
    'swapStakerControllerCid' : IDL.Text,
    'swapFactoryCid' : IDL.Text,
  });
  const Result_7 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Nat });
  const Error = IDL.Variant({
    'CommonError' : IDL.Null,
    'InternalError' : IDL.Text,
    'UnsupportedToken' : IDL.Text,
    'InsufficientFunds' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : Error });
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const TokenIndex = IDL.Nat32;
  const KVPair = IDL.Record({ 'k' : IDL.Text, 'v' : IDL.Text });
  const TokenMetadata__1 = IDL.Record({
    'cId' : IDL.Text,
    'tokenId' : TokenIndex,
    'owner' : AccountIdentifier,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'link' : IDL.Text,
    'name' : IDL.Text,
    'minter' : AccountIdentifier,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'mintTime' : IDL.Int,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(TokenMetadata__1),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const Result_6 = IDL.Variant({ 'ok' : Page, 'err' : Error });
  const TokenMetadata = IDL.Record({
    'cId' : IDL.Text,
    'tokenId' : TokenIndex,
    'owner' : AccountIdentifier,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'link' : IDL.Text,
    'name' : IDL.Text,
    'minter' : AccountIdentifier,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'mintTime' : IDL.Int,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const Deposit = IDL.Record({
    'tokenId' : IDL.Nat,
    'numberOfStakes' : IDL.Nat,
    'tickUpper' : IDL.Int,
    'owner' : IDL.Text,
    'pool' : IDL.Text,
    'tokenMetadata' : TokenMetadata,
    'holder' : IDL.Text,
    'tickLower' : IDL.Int,
  });
  const Result_5 = IDL.Variant({ 'ok' : Deposit, 'err' : Error });
  const Result_4 = IDL.Variant({ 'ok' : PublicIncentive, 'err' : Error });
  const RewardInfo = IDL.Record({
    'reward' : IDL.Nat,
    'secondsInsideX128' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok' : RewardInfo, 'err' : Error });
  const Stake = IDL.Record({
    'liquidityNoOverflow' : IDL.Nat,
    'secondsPerLiquidityInsideInitialX128' : IDL.Nat,
    'liquidityIfOverflow' : IDL.Nat,
  });
  const Result_2 = IDL.Variant({ 'ok' : Stake, 'err' : Error });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const SwapStaker = IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'cycleAvailable' : IDL.Func([], [Result_7], []),
    'cycleBalance' : IDL.Func([], [Result_7], []),
    'endIncentive' : IDL.Func([], [Result], []),
    'findUserIncentivesTokenids' : IDL.Func(
        [User, IDL.Nat, IDL.Nat],
        [Result_6],
        [],
      ),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getDeposits' : IDL.Func([IDL.Nat], [Result_5], []),
    'getIncentives' : IDL.Func([User], [Result_4], []),
    'getRewardInfo' : IDL.Func([IDL.Vec(IDL.Nat)], [Result_3], []),
    'getStakes' : IDL.Func([IDL.Nat], [Result_2], []),
    'initIncentives' : IDL.Func([PublicIncentive], [], []),
    'isAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'openReward' : IDL.Func([IDL.Nat], [], []),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'setHeartFeeRate' : IDL.Func([IDL.Nat], [], []),
    'setStorageCid' : IDL.Func([IDL.Text], [], []),
    'setWicpCanisterId' : IDL.Func([Token], [], []),
    'stakeTokenids' : IDL.Func([IDL.Nat], [Result], []),
    'transferToken' : IDL.Func([IDL.Nat], [Result_1], []),
    'unstakeTokenids' : IDL.Func([IDL.Nat], [Result], []),
  });
  return SwapStaker;
};
export const init = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
  const PublicIncentive = IDL.Record({
    'startTime' : IDL.Nat,
    'status' : IDL.Text,
    'rewardTokenSymbol' : IDL.Text,
    'numberOfStakes' : IDL.Nat,
    'incentiveCanisterId' : IDL.Text,
    'rewardToken' : Token,
    'totalLiquidity' : IDL.Nat,
    'endTime' : IDL.Nat,
    'incentive' : IDL.Text,
    'totalAmount0' : IDL.Int,
    'totalAmount1' : IDL.Int,
    'pool' : IDL.Text,
    'refundee' : IDL.Text,
    'totalRewardClaimed' : IDL.Nat,
    'stakesTokenIds' : IDL.Vec(IDL.Nat),
    'storageCid' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'poolToken0' : Token,
    'poolToken1' : Token,
    'poolFee' : IDL.Nat,
    'totalReward' : IDL.Nat,
    'userTotalAmount0' : IDL.Int,
    'userTotalAmount1' : IDL.Int,
    'rewardTokenDecimals' : IDL.Nat,
    'userNumberOfStakes' : IDL.Nat,
    'totalRewardUnclaimed' : IDL.Nat,
    'totalSecondsClaimedX128' : IDL.Nat,
    'userTotalLiquidity' : IDL.Nat,
  });
  const InitProxyCanister = IDL.Record({
    'swapNFTCid' : IDL.Text,
    'lockCid' : IDL.Text,
    'WICP' : Token,
    'swapStakerControllerCid' : IDL.Text,
    'swapFactoryCid' : IDL.Text,
  });
  return [PublicIncentive, InitProxyCanister];
};
