export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'addToken' : IDL.Func([IDL.Text], [], []),
    'balance' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'balanceList' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'tokenId' : IDL.Text, 'balance' : IDL.Nat }))],
        [],
      ),
    'cycleAvailable' : IDL.Func([], [IDL.Nat], []),
    'cycleBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getWalletAddress' : IDL.Func([], [IDL.Principal], ['query']),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
