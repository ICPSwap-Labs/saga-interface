export const idlFactory = ({ IDL }) => {
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Address = IDL.Text;
  const TransactionsType = IDL.Record({
    'to' : IDL.Text,
    'action' : IDL.Variant({
      'decreaseLiquidity' : IDL.Null,
      'claim' : IDL.Null,
      'swap' : IDL.Null,
      'addLiquidity' : IDL.Null,
      'increaseLiquidity' : IDL.Null,
    }),
    'token0Id' : IDL.Text,
    'token1Id' : IDL.Text,
    'liquidityTotal' : IDL.Nat,
    'from' : IDL.Text,
    'tick' : IDL.Int,
    'token1Price' : IDL.Float64,
    'recipient' : IDL.Text,
    'token0ChangeAmount' : IDL.Float64,
    'liquidityChange' : IDL.Nat,
    'token1Standard' : IDL.Text,
    'token0Fee' : IDL.Float64,
    'token1Fee' : IDL.Float64,
    'timestamp' : IDL.Int,
    'token1ChangeAmount' : IDL.Float64,
    'token1Decimals' : IDL.Float64,
    'token0Standard' : IDL.Text,
    'amountUSD' : IDL.Float64,
    'poolFee' : IDL.Nat,
    'token0Symbol' : IDL.Text,
    'price' : IDL.Float64,
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
  const TransactionType__1 = IDL.Variant({
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
    'volumeUSD' : IDL.Float64,
    'feesUSD' : IDL.Float64,
    'tvlUSD' : IDL.Float64,
    'timestamp' : IDL.Int,
    'txCount' : IDL.Int,
  });
  const PublicProtocolData = IDL.Record({
    'volumeUSD' : IDL.Float64,
    'feesUSD' : IDL.Float64,
    'feesUSDChange' : IDL.Float64,
    'tvlUSD' : IDL.Float64,
    'txCount' : IDL.Int,
    'volumeUSDChange' : IDL.Float64,
    'tvlUSDChange' : IDL.Float64,
  });
  const TransactionType = IDL.Variant({
    'decreaseLiquidity' : IDL.Null,
    'claim' : IDL.Null,
    'swap' : IDL.Null,
    'addLiquidity' : IDL.Null,
    'increaseLiquidity' : IDL.Null,
  });
  const SwapRecordInfo = IDL.Record({
    'to' : IDL.Text,
    'feeAmount' : IDL.Int,
    'action' : TransactionType,
    'feeAmountTotal' : IDL.Int,
    'token0Id' : IDL.Text,
    'token1Id' : IDL.Text,
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
    'backBaseData' : IDL.Func([], [], []),
    'cycleAvailable' : IDL.Func([], [NatResult], ['query']),
    'cycleBalance' : IDL.Func([], [NatResult], ['query']),
    'get' : IDL.Func([Address, IDL.Nat, IDL.Nat], [RecordPage], ['query']),
    'getAddressAndCountByCondition' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(IDL.Record({ 'count' : IDL.Nat, 'address' : IDL.Text }))],
        ['query'],
      ),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getAllTransactions' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Int,
          IDL.Opt(TransactionType__1),
          IDL.Nat,
          IDL.Nat,
        ],
        [Page],
        ['query'],
      ),
    'getBaseRecord' : IDL.Func([IDL.Nat, IDL.Nat], [RecordPage], ['query']),
    'getCanister' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getChartData' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(PublicSwapChartDayData)],
        ['query'],
      ),
    'getDataDirectory' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text))],
        ['query'],
      ),
    'getMaxLimit' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'getMaxPages' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'getPagesBaseRecord' : IDL.Func([IDL.Nat], [RecordPage], ['query']),
    'getPoolLastPrice' : IDL.Func([IDL.Text], [IDL.Float64], ['query']),
    'getPoolLastRate' : IDL.Func([IDL.Text], [IDL.Float64], ['query']),
    'getProtocolData' : IDL.Func([], [PublicProtocolData], ['query']),
    'getSwapUserAddress' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getSwapUserNum' : IDL.Func([], [IDL.Nat], ['query']),
    'getTotalValueLockedUSD' : IDL.Func([], [IDL.Nat], ['query']),
    'getTxCount' : IDL.Func([], [IDL.Nat], ['query']),
    'isAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'push' : IDL.Func([SwapRecordInfo], [], []),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'removeBasePoolList' : IDL.Func([IDL.Text], [], []),
    'removeBaseTokenList' : IDL.Func([IDL.Text], [], []),
    'removePoolsList' : IDL.Func([IDL.Text], [], []),
    'removeTokenList' : IDL.Func([IDL.Text], [], []),
    'rollBackBaseData' : IDL.Func([], [], []),
    'setCanister' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'setMaxLimit' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setMaxPages' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'setWICPPrice' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
