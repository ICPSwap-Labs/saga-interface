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
  const IncentiveKey = IDL.Record({
    'startTime' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'rewardToken' : Token,
    'endTime' : IDL.Nat,
    'pool' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const InitRequest = IDL.Record({
    'stakingTokenSymbol' : IDL.Text,
    'startTime' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'stakingToken' : Token,
    'rewardToken' : Token,
    'rewardPerTime' : IDL.Nat,
    'name' : IDL.Text,
    'stakingTokenFee' : IDL.Nat,
    'rewardTokenFee' : IDL.Nat,
    'stakingTokenDecimals' : IDL.Nat,
    'bonusEndTime' : IDL.Nat,
    'BONUS_MULTIPLIER' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
  });
  const Page_1 = IDL.Record({
    'content' : IDL.Vec(PublicIncentive),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok' : Page_1, 'err' : IDL.Text });
  const Canisters = IDL.Record({
    'swapNFTCid' : IDL.Text,
    'lockCid' : IDL.Text,
    'wicp' : Token,
    'swapStakerCreateTokenPoolsController' : IDL.Text,
    'swapStakerControllerCid' : IDL.Text,
    'swapFactory' : IDL.Text,
    'swapStakerCreateFarmsController' : IDL.Text,
  });
  const GlobalDataResult = IDL.Record({
    'count' : IDL.Nat,
    'globalTVL' : IDL.Float64,
    'globalRewardTVL' : IDL.Float64,
  });
  const Result_2 = IDL.Variant({ 'ok' : GlobalDataResult, 'err' : IDL.Text });
  const SingleSmartChefGlobalDataType = IDL.Record({
    'earned' : IDL.Float64,
    'stakerNumber' : IDL.Float64,
  });
  const Result_1 = IDL.Variant({
    'ok' : SingleSmartChefGlobalDataType,
    'err' : IDL.Text,
  });
  const SmartChefType = IDL.Record({
    'stakingTokenSymbol' : IDL.Text,
    'startTime' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'creator' : IDL.Text,
    'stakingToken' : Token,
    'rewardToken' : Token,
    'name' : IDL.Text,
    'createTime' : IDL.Nat,
    'stakingTokenFee' : IDL.Nat,
    'storageCid' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'stakingTokenDecimals' : IDL.Nat,
    'bonusEndTime' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
    'canisterId' : IDL.Text,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(SmartChefType),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const Result = IDL.Variant({ 'ok' : Page, 'err' : Page });
  return IDL.Service({
    'addControllers' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'addIncentivesEntries' : IDL.Func([PublicIncentive], [], []),
    'createIncentive' : IDL.Func([IncentiveKey, IDL.Nat], [Result_4], []),
    'createSingleSmartChef' : IDL.Func([InitRequest], [Result_4], []),
    'cycleAvailable' : IDL.Func([], [IDL.Nat], ['query']),
    'cycleBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'deleteSingleSmartList' : IDL.Func([IDL.Text], [], []),
    'findIncentivesPoolsList' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [Result_3],
        ['query'],
      ),
    'getCanister' : IDL.Func([], [Canisters], ['query']),
    'getGlobalData' : IDL.Func([], [Result_2], []),
    'getSingleSmartGlobalData' : IDL.Func([], [Result_1], ['query']),
    'setHeartRate' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setSingleSmartChefAdmin' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'setSwapFactoryCanister' : IDL.Func([IDL.Text], [], []),
    'setSwapNFTCanisterId' : IDL.Func([IDL.Text], [], []),
    'setSwapStakerCreateFarmsController' : IDL.Func([IDL.Text], [], []),
    'setSwapStakerCreateTokenPoolsController' : IDL.Func([IDL.Text], [], []),
    'setWICP' : IDL.Func([Token], [], []),
    'singleSmartChefList' : IDL.Func([IDL.Nat, IDL.Nat], [Result], ['query']),
    'startSingleSmart' : IDL.Func([IDL.Text, IDL.Nat, IDL.Nat], [], []),
    'stopSingleSmart' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
