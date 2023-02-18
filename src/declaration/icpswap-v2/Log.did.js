export const idlFactory = ({ IDL }) => {
  const LogInfo = IDL.Record({
    'cid' : IDL.Text,
    'method' : IDL.Text,
    'lineNum' : IDL.Opt(IDL.Nat),
    'level' : IDL.Text,
    'message' : IDL.Text,
    'timestamp' : IDL.Int,
    'stackInfo' : IDL.Opt(IDL.Text),
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(LogInfo),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult = IDL.Variant({ 'ok' : Page, 'err' : IDL.Text });
  return IDL.Service({
    'deBug' : IDL.Func([IDL.Text, IDL.Text, IDL.Opt(IDL.Nat)], [IDL.Bool], []),
    'error' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Opt(IDL.Text), IDL.Opt(IDL.Nat)],
        [IDL.Bool],
        [],
      ),
    'findLog' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text), IDL.Nat, IDL.Nat],
        [ResponseResult],
        ['query'],
      ),
    'findLogList' : IDL.Func([IDL.Nat, IDL.Nat], [ResponseResult], ['query']),
    'findLogPage' : IDL.Func(
        [
          IDL.Opt(IDL.Text),
          IDL.Opt(IDL.Text),
          IDL.Opt(IDL.Text),
          IDL.Nat,
          IDL.Nat,
        ],
        [ResponseResult],
        ['query'],
      ),
    'info' : IDL.Func([IDL.Text, IDL.Text, IDL.Opt(IDL.Nat)], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
