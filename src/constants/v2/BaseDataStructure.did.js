export const idlFactory = ({ IDL }) => {
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Address__1 = IDL.Text;
  const _TransactionType = IDL.Variant({
    'fee' : IDL.Null,
    'burn' : IDL.Null,
    'claim' : IDL.Null,
    'mint' : IDL.Null,
    'swap' : IDL.Null,
    'addLiquidity' : IDL.Null,
    'removeLiquidity' : IDL.Null,
    'refreshIncome' : IDL.Null,
    'transfer' : IDL.Null,
    'collect' : IDL.Null,
  });
  const TransactionsType = IDL.Record({
    'to' : IDL.Text,
    'action' : _TransactionType,
    'token0Id' : IDL.Text,
    'token1Id' : IDL.Text,
    'liquidityTotal' : IDL.Nat,
    'from' : IDL.Text,
    'exchangePrice' : IDL.Float64,
    'hash' : IDL.Text,
    'tick' : IDL.Int,
    'token1Price' : IDL.Float64,
    'recipient' : IDL.Text,
    'token0ChangeAmount' : IDL.Float64,
    'sender' : IDL.Text,
    'exchangeRate' : IDL.Float64,
    'liquidityChange' : IDL.Nat,
    'token1Standard' : IDL.Text,
    'token0Fee' : IDL.Float64,
    'token1Fee' : IDL.Float64,
    'timestamp' : IDL.Int,
    'token1ChangeAmount' : IDL.Float64,
    'token1Decimals' : IDL.Float64,
    'token0Standard' : IDL.Text,
    'amountUSD' : IDL.Float64,
    'amountToken0' : IDL.Float64,
    'amountToken1' : IDL.Float64,
    'poolFee' : IDL.Nat,
    'token0Symbol' : IDL.Text,
    'token0Decimals' : IDL.Float64,
    'token0Price' : IDL.Float64,
    'token1Symbol' : IDL.Text,
    'poolId' : IDL.Text,
  });
  const RecordPage = IDL.Record({
    'content' : IDL.Vec(TransactionsType),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const TransactionType = IDL.Variant({
    'fee' : IDL.Null,
    'burn' : IDL.Null,
    'claim' : IDL.Null,
    'mint' : IDL.Null,
    'swap' : IDL.Null,
    'addLiquidity' : IDL.Null,
    'removeLiquidity' : IDL.Null,
    'refreshIncome' : IDL.Null,
    'transfer' : IDL.Null,
    'collect' : IDL.Null,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(TransactionsType),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const PublicSwapChartDayData = IDL.Record({
    'id' : IDL.Int,
    'feeUSD' : IDL.Float64,
    'volumeUSD' : IDL.Float64,
    'tvlUSD' : IDL.Float64,
    'timestamp' : IDL.Int,
    'txCount' : IDL.Int,
  });
  const PublicProtocolData = IDL.Record({
    'volumeUSD' : IDL.Float64,
    'feesUSD' : IDL.Float64,
    'tvlUSD' : IDL.Float64,
    'txCount' : IDL.Int,
    'volumeUSDChange' : IDL.Float64,
    'tvlUSDChange' : IDL.Float64,
    'feeChange' : IDL.Float64,
  });
  const Address = IDL.Text;
  const SwapRecordInfo = IDL.Record({
    'to' : IDL.Text,
    'feeAmount' : IDL.Int,
    'action' : TransactionType,
    'feeAmountTotal' : IDL.Int,
    'token0Id' : Address,
    'token1Id' : Address,
    'token0AmountTotal' : IDL.Nat,
    'liquidityTotal' : IDL.Nat,
    'from' : IDL.Text,
    'tick' : IDL.Int,
    'feeTire' : IDL.Nat,
    'recipient' : IDL.Text,
    'token0ChangeAmount' : IDL.Nat,
    'token1AmountTotal' : IDL.Nat,
    'liquidityChange' : IDL.Nat,
    'token1Standard' : IDL.Text,
    'TVLToken0' : IDL.Int,
    'TVLToken1' : IDL.Int,
    'token0Fee' : IDL.Nat,
    'token1Fee' : IDL.Nat,
    'timestamp' : IDL.Int,
    'token1ChangeAmount' : IDL.Nat,
    'token0Standard' : IDL.Text,
    'price' : IDL.Nat,
    'poolId' : IDL.Text,
  });
  return IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'cycleAvailable' : IDL.Func([], [NatResult], []),
    'cycleBalance' : IDL.Func([], [NatResult], []),
    'get' : IDL.Func([Address__1, IDL.Nat, IDL.Nat], [RecordPage], ['query']),
    'getAddressAndCountByCondition' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(IDL.Record({ 'count' : IDL.Nat, 'address' : IDL.Text }))],
        [],
      ),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getAllTransactions' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Int,
          IDL.Opt(TransactionType),
          IDL.Nat,
          IDL.Nat,
        ],
        [Page],
        ['query'],
      ),
    'getBaseRecord' : IDL.Func([IDL.Nat, IDL.Nat], [RecordPage], ['query']),
    'getChartData' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(PublicSwapChartDayData)],
        ['query'],
      ),
    'getProtocolData' : IDL.Func([], [PublicProtocolData], ['query']),
    'getSwapPositionManagerCanisterId' : IDL.Func([], [IDL.Text], ['query']),
    'getSwapUserAddress' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getSwapUserNum' : IDL.Func([], [IDL.Nat], ['query']),
    'getTotalValueLockedUSD' : IDL.Func([], [IDL.Nat], ['query']),
    'getTxCount' : IDL.Func([], [IDL.Nat], ['query']),
    'isAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'push' : IDL.Func([SwapRecordInfo], [], []),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'removeTokenList' : IDL.Func([IDL.Text], [], []),
    'resetAllData' : IDL.Func([], [], []),
    'rollBackData' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'rollBackData_Token' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'rollBackSwapDayData' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'rollBackUserRecord' : IDL.Func([], [], []),
    'setCanister' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'setSwapPositionManagerCanisterId' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
