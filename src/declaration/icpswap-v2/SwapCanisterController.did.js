export const idlFactory = ({ IDL }) => {
  const Address = IDL.Text;
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const CanisterView = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'cycle' : IDL.Nat,
  });
  const ResponseResult = IDL.Variant({
    'ok' : IDL.Vec(CanisterView),
    'err' : IDL.Text,
  });
  return IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'addPoolAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'createSwapPoolCanister' : IDL.Func(
        [
          Address,
          Address,
          IDL.Text,
          Address,
          IDL.Text,
          IDL.Nat,
          IDL.Nat,
          IDL.Text,
        ],
        [IDL.Principal],
        [],
      ),
    'cycleAvailable' : IDL.Func([], [NatResult], []),
    'cycleBalance' : IDL.Func([], [NatResult], ['query']),
    'getAdminList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getCanisters' : IDL.Func([], [ResponseResult], ['query']),
    'getStatus' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Record({
            'settings' : IDL.Record({ 'controllers' : IDL.Vec(IDL.Principal) }),
          }),
        ],
        [],
      ),
    'getSwapFeeHolderCanisterId' : IDL.Func([], [IDL.Text], ['query']),
    'removeAdmin' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'resetController' : IDL.Func([], [], []),
    'setSwapFeeHolderCanisterId' : IDL.Func([IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
