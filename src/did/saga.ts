export const idlFactory = ({ IDL }: any) => {
  const ArgValue = IDL.Rec();
  ArgValue.fill(
    IDL.Variant({
      I64: IDL.Int64,
      U64: IDL.Nat64,
      Vec: IDL.Vec(ArgValue),
      Slice: IDL.Vec(IDL.Nat8),
      Text: IDL.Text,
      True: IDL.Null,
      False: IDL.Null,
      Float: IDL.Float64,
      Principal: IDL.Principal,
    })
  );
  const EventNodeRequest = IDL.Record({
    args: IDL.Vec(IDL.Tuple(IDL.Text, ArgValue)),
    name: IDL.Text,
  });
  const EventRequest = IDL.Record({
    name: IDL.Text,
    nodes: IDL.Vec(EventNodeRequest),
  });
  const NodeLog = IDL.Record({
    name: IDL.Text,
    compensate_execute_status: IDL.Bool,
    execute_status: IDL.Bool,
  });
  const Log = IDL.Record({ logs: IDL.Vec(NodeLog), time: IDL.Nat64 });
  const EventNode = IDL.Record({
    cid: IDL.Text,
    compensate_func_name: IDL.Text,
    next_node: IDL.Text,
    name: IDL.Text,
    func_name: IDL.Text,
    pre_node: IDL.Text,
  });
  const EventLang = IDL.Record({
    owner: IDL.Principal,
    name: IDL.Text,
    time: IDL.Nat64,
    comment: IDL.Text,
    nodes: IDL.Vec(EventNode),
  });
  const EventLangRequest = IDL.Record({
    name: IDL.Text,
    comment: IDL.Text,
    nodes: IDL.Vec(EventNode),
  });
  return IDL.Service({
    delete: IDL.Func([IDL.Text], [IDL.Bool], []),
    execute: IDL.Func([EventRequest], [Log], []),
    find: IDL.Func([], [IDL.Vec(EventLang)], ["query"]),
    find_log: IDL.Func([IDL.Text], [IDL.Vec(Log)], ["query"]),
    get: IDL.Func([IDL.Text], [IDL.Opt(EventLang)], ["query"]),
    insert: IDL.Func([EventLangRequest], [IDL.Bool], []),
    test: IDL.Func([IDL.Text, IDL.Text, IDL.Vec(IDL.Tuple(IDL.Text, ArgValue))], [IDL.Bool], []),
  });
};
