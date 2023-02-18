export const idlFactory = ({ IDL }) => {
  const TokenIndex = IDL.Nat32;
  const AccountIdentifier = IDL.Text;
  const SendBatchRequest = IDL.Record({
    'tokens' : IDL.Vec(TokenIndex),
    'users' : IDL.Vec(AccountIdentifier),
  });
  return IDL.Service({
    'airdrop' : IDL.Func([SendBatchRequest], [IDL.Bool, IDL.Text], []),
    'test' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
