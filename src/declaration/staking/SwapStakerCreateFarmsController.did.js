export const idlFactory = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
  const IncentiveKey = IDL.Record({
    'startTime' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'rewardToken' : Token,
    'endTime' : IDL.Nat,
    'pool' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
  });
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
  const Result = IDL.Variant({ 'ok' : PublicIncentive, 'err' : IDL.Text });
  return IDL.Service({
    'createIncentive' : IDL.Func([IncentiveKey, IDL.Nat], [Result], []),
    'getCanister' : IDL.Func(
        [],
        [
          IDL.Record({
            'SwapStakerControllerCanisterId' : IDL.Text,
            'SwapFactoryCanisterId' : IDL.Text,
            'lockCid' : IDL.Text,
            'WICP' : Token,
            'SwapNFTCid' : IDL.Text,
          }),
        ],
        ['query'],
      ),
    'setHeartRate' : IDL.Func([IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
