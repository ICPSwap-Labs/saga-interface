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
  const Result_1 = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const ChangePoolInfo = IDL.Record({
    'stakingTokenSymbol' : IDL.Text,
    'lastRewardTime' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'stakingToken' : Token,
    'rewardToken' : Token,
    'rewardPerTime' : IDL.Nat,
    'stakingTokenFee' : IDL.Nat,
    'rewardTokenFee' : IDL.Nat,
    'stakingTokenDecimals' : IDL.Nat,
    'bonusEndTime' : IDL.Nat,
    'BONUS_MULTIPLIER' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
  });
  const Ledger = IDL.Record({
    'staking' : IDL.Float64,
    'claim' : IDL.Float64,
    'stakingBalance' : IDL.Float64,
    'unStaking' : IDL.Float64,
    'rewardBalance' : IDL.Float64,
  });
  const Error = IDL.Variant({
    'CommonError' : IDL.Null,
    'InternalError' : IDL.Text,
    'UnsupportedToken' : IDL.Text,
    'InsufficientFunds' : IDL.Null,
  });
  const Result_7 = IDL.Variant({ 'ok' : Ledger, 'err' : Error });
  const Result_6 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Nat });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Vec(IDL.Text), 'err' : IDL.Text });
  const PublicPoolInfo = IDL.Record({
    'stakingTokenSymbol' : IDL.Text,
    'lastRewardTime' : IDL.Nat,
    'totalDeposit' : IDL.Nat,
    'rewardTokenSymbol' : IDL.Text,
    'stakingToken' : Token,
    'rewardToken' : Token,
    'rewardPerTime' : IDL.Nat,
    'stakingTokenFee' : IDL.Nat,
    'rewardDebt' : IDL.Nat,
    'storageCid' : IDL.Text,
    'rewardTokenFee' : IDL.Nat,
    'accPerShare' : IDL.Nat,
    'stakingTokenDecimals' : IDL.Nat,
    'bonusEndTime' : IDL.Nat,
    'BONUS_MULTIPLIER' : IDL.Nat,
    'rewardTokenDecimals' : IDL.Nat,
    'allocPoint' : IDL.Nat,
  });
  const Result_4 = IDL.Variant({ 'ok' : PublicPoolInfo, 'err' : IDL.Text });
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const PublicUserInfo = IDL.Record({
    'pendingReward' : IDL.Nat,
    'rewardDebt' : IDL.Nat,
    'amount' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok' : PublicUserInfo, 'err' : IDL.Text });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const SingleSmartChef = IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [Result_1], []),
    'changePoolInfo' : IDL.Func([ChangePoolInfo], [], []),
    'clearLocksMap' : IDL.Func([], [], []),
    'compareLedger' : IDL.Func([], [Result_7], []),
    'cycleAvailable' : IDL.Func([], [Result_6], ['query']),
    'cycleBalance' : IDL.Func([], [Result_6], ['query']),
    'deposit' : IDL.Func([IDL.Nat], [Result], []),
    'endSingleSmartChefCanister' : IDL.Func([], [], []),
    'getAdminList' : IDL.Func([], [Result_5], ['query']),
    'getAllLocks' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))], []),
    'getAllUserInfoEntries' : IDL.Func([], [IDL.Text], []),
    'getPoolInfo' : IDL.Func([], [Result_4], ['query']),
    'getUserInfo' : IDL.Func([User], [Result_3], ['query']),
    'harvest' : IDL.Func([], [Result_2], []),
    'initLedger' : IDL.Func([], [], []),
    'pendingReward' : IDL.Func([User], [Result_2], ['query']),
    'removeAdmin' : IDL.Func([IDL.Text], [Result_1], []),
    'resetReward' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'setAutoUnlockTimes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'stopReward' : IDL.Func([], [], []),
    'updateMultiplier' : IDL.Func([IDL.Nat], [], []),
    'withdraw' : IDL.Func([IDL.Nat], [Result], []),
  });
  return SingleSmartChef;
};
export const init = ({ IDL }) => {
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
  return [InitRequest, IDL.Text, IDL.Text];
};
