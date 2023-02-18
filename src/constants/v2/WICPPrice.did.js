export const idlFactory = ({ IDL }) => {
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const WICPType = IDL.Record({
    'icpswap' : IDL.Record({ 'decimals' : IDL.Nat, 'address' : IDL.Text }),
    'sonic' : IDL.Record({ 'decimals' : IDL.Nat, 'address' : IDL.Text }),
  });
  return IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'cycleAvailable' : IDL.Func([], [NatResult], []),
    'cycleBalance' : IDL.Func([], [NatResult], []),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getICP_XDR_Price' : IDL.Func([], [IDL.Float64], []),
    'getIcpPrice' : IDL.Func([IDL.Nat], [IDL.Float64], ['query']),
    'getSwapRouterCanisterId' : IDL.Func([], [IDL.Text], ['query']),
    'getTokenUSDPrice' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Text, IDL.Nat],
        [IDL.Float64],
        [],
      ),
    'getWicp' : IDL.Func([], [WICPType], []),
    'getWicpPrice' : IDL.Func([], [IDL.Float64], []),
    'getWicps' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'isAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'setICPXDRRate' : IDL.Func([IDL.Float64], [], []),
    'setSwapRouterCanisterId' : IDL.Func([IDL.Text], [], []),
    'setWICP' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'setWicpPrice' : IDL.Func([IDL.Float64], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
