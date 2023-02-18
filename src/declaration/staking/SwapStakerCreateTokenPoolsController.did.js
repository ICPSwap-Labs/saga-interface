export const idlFactory = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
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
  const Result = IDL.Variant({ 'ok' : SmartChefType, 'err' : IDL.Text });
  return IDL.Service({
    'createSingleSmartChef' : IDL.Func([InitRequest], [Result], []),
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
