export const idlFactory = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
  const AccountBalance = IDL.Record({
    'balance0' : IDL.Nat,
    'balance1' : IDL.Nat,
  });
  const ClaimArgs = IDL.Record({
    'operator' : IDL.Principal,
    'positionId' : IDL.Nat,
  });
  const Error = IDL.Variant({
    'CommonError' : IDL.Null,
    'InternalError' : IDL.Text,
    'UnsupportedToken' : IDL.Text,
    'InsufficientFunds' : IDL.Null,
  });
  const Result_10 = IDL.Variant({
    'ok' : IDL.Record({ 'amount0' : IDL.Nat, 'amount1' : IDL.Nat }),
    'err' : Error,
  });
  const DecreaseLiquidityArgs = IDL.Record({
    'operator' : IDL.Principal,
    'liquidity' : IDL.Text,
    'amount0Min' : IDL.Text,
    'amount1Min' : IDL.Text,
    'positionId' : IDL.Nat,
  });
  const DepositArgs = IDL.Record({ 'token' : IDL.Text, 'amount' : IDL.Nat });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : Error });
  const Result_9 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal)),
    'err' : Error,
  });
  const GetPositionArgs = IDL.Record({
    'tickUpper' : IDL.Int,
    'tickLower' : IDL.Int,
  });
  const PositionInfo = IDL.Record({
    'tokensOwed0' : IDL.Nat,
    'tokensOwed1' : IDL.Nat,
    'feeGrowthInside1LastX128' : IDL.Nat,
    'liquidity' : IDL.Nat,
    'feeGrowthInside0LastX128' : IDL.Nat,
  });
  const Result_8 = IDL.Variant({ 'ok' : PositionInfo, 'err' : Error });
  const Result_7 = IDL.Variant({ 'ok' : IDL.Principal, 'err' : Error });
  const Result_6 = IDL.Variant({
    'ok' : IDL.Record({
      'swapFee0Repurchase' : IDL.Nat,
      'swapFee1Repurchase' : IDL.Nat,
    }),
    'err' : Error,
  });
  const TickLiquidityInfo = IDL.Record({
    'tickIndex' : IDL.Int,
    'price0Decimal' : IDL.Nat,
    'liquidityNet' : IDL.Int,
    'price0' : IDL.Nat,
    'price1' : IDL.Nat,
    'liquidityGross' : IDL.Nat,
    'price1Decimal' : IDL.Nat,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(TickLiquidityInfo),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const Result_5 = IDL.Variant({ 'ok' : Page, 'err' : Error });
  const Value = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const UserPositionInfo = IDL.Record({
    'tickUpper' : IDL.Int,
    'tokensOwed0' : IDL.Nat,
    'tokensOwed1' : IDL.Nat,
    'feeGrowthInside1LastX128' : IDL.Nat,
    'liquidity' : IDL.Nat,
    'feeGrowthInside0LastX128' : IDL.Nat,
    'tickLower' : IDL.Int,
  });
  const Result_4 = IDL.Variant({ 'ok' : UserPositionInfo, 'err' : Error });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Record({ 'balance0' : IDL.Nat, 'balance1' : IDL.Nat }),
    'err' : Error,
  });
  const IncreaseLiquidityArgs = IDL.Record({
    'operator' : IDL.Principal,
    'amount0Min' : IDL.Text,
    'amount1Min' : IDL.Text,
    'positionId' : IDL.Nat,
    'amount0Desired' : IDL.Text,
    'amount1Desired' : IDL.Text,
  });
  const PoolMetadata = IDL.Record({
    'fee' : IDL.Nat,
    'key' : IDL.Text,
    'sqrtPriceX96' : IDL.Nat,
    'tick' : IDL.Int,
    'liquidity' : IDL.Nat,
    'token0' : Token,
    'token1' : Token,
  });
  const Result_2 = IDL.Variant({ 'ok' : PoolMetadata, 'err' : Error });
  const MintArgs = IDL.Record({
    'fee' : IDL.Nat,
    'tickUpper' : IDL.Int,
    'operator' : IDL.Principal,
    'amount0Min' : IDL.Text,
    'amount1Min' : IDL.Text,
    'token0' : IDL.Text,
    'token1' : IDL.Text,
    'amount0Desired' : IDL.Text,
    'amount1Desired' : IDL.Text,
    'tickLower' : IDL.Int,
  });
  const SwapArgs = IDL.Record({
    'operator' : IDL.Principal,
    'amountIn' : IDL.Text,
    'zeroForOne' : IDL.Bool,
    'amountOutMinimum' : IDL.Text,
  });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Record({ 'tokensOwed0' : IDL.Nat, 'tokensOwed1' : IDL.Nat }),
    'err' : Error,
  });
  const WithdrawArgs = IDL.Record({ 'token' : IDL.Text, 'amount' : IDL.Nat });
  const SwapPool = IDL.Service({
    'allTokenBalance' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, AccountBalance))],
        [],
      ),
    'claim' : IDL.Func([ClaimArgs], [Result_10], []),
    'decreaseLiquidity' : IDL.Func([DecreaseLiquidityArgs], [Result_10], []),
    'deposit' : IDL.Func([DepositArgs], [Result], []),
    'depositFrom' : IDL.Func([DepositArgs], [Result], []),
    'getAddressPrincipals' : IDL.Func([], [Result_9], ['query']),
    'getPosition' : IDL.Func([GetPositionArgs], [Result_8], ['query']),
    'getPrincipal' : IDL.Func([IDL.Text], [Result_7], ['query']),
    'getSwapFeeRepurchaseAmount' : IDL.Func([], [Result_6], ['query']),
    'getTickInfos' : IDL.Func([IDL.Nat, IDL.Nat], [Result_5], ['query']),
    'getTokenMeta' : IDL.Func(
        [],
        [
          IDL.Record({
            'token0' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
            'token1' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
          }),
        ],
        [],
      ),
    'getUserPosition' : IDL.Func([IDL.Nat], [Result_4], ['query']),
    'getUserUnusedBalance' : IDL.Func([IDL.Principal], [Result_3], ['query']),
    'increaseLiquidity' : IDL.Func([IncreaseLiquidityArgs], [Result], []),
    'metadata' : IDL.Func([], [Result_2], ['query']),
    'mint' : IDL.Func([MintArgs], [Result], []),
    'quote' : IDL.Func([SwapArgs], [Result], ['query']),
    'refreshIncome' : IDL.Func([IDL.Nat], [Result_1], ['query']),
    'swap' : IDL.Func([SwapArgs], [Result], []),
    'withdraw' : IDL.Func([WithdrawArgs], [Result], []),
  });
  return SwapPool;
};
export const init = ({ IDL }) => {
  const Token = IDL.Record({ 'address' : IDL.Text, 'standard' : IDL.Text });
  return [Token, Token, IDL.Nat, IDL.Int, IDL.Nat, IDL.Text, IDL.Text];
};
