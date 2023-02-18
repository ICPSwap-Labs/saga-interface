export const idlFactory = ({ IDL }) => {
  const Value = IDL.Rec();
  const Client = IDL.Record({ 'principal' : IDL.Principal, 'memo' : IDL.Text });
  const Error = IDL.Variant({
    'CommonError' : IDL.Text,
    'RecordExists' : IDL.Text,
    'NotExists' : IDL.Text,
    'ReferentialConstraint' : IDL.Text,
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Principal, 'err' : Error });
  const Result_12 = IDL.Variant({
    'ok' : IDL.Record({ 'client' : IDL.Principal, 'role' : IDL.Text }),
    'err' : Error,
  });
  Value.fill(
    IDL.Variant({
      'Map' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
      'List' : IDL.Vec(Value),
      'Text' : IDL.Text,
    })
  );
  const Config = IDL.Record({
    'id' : IDL.Text,
    'value' : Value,
    'appName' : IDL.Opt(IDL.Text),
    'version' : IDL.Nat32,
    'group' : IDL.Text,
    'category' : IDL.Opt(IDL.Text),
    'namespace' : IDL.Text,
  });
  const Result_3 = IDL.Variant({ 'ok' : Config, 'err' : Error });
  const Group = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'namespace' : IDL.Text,
  });
  const Result_13 = IDL.Variant({ 'ok' : Group, 'err' : Error });
  const Namespace = IDL.Record({ 'id' : IDL.Text, 'name' : IDL.Text });
  const Result_2 = IDL.Variant({ 'ok' : Namespace, 'err' : Error });
  const Permission = IDL.Record({
    'id' : IDL.Text,
    'writable' : IDL.Bool,
    'readable' : IDL.Bool,
    'group' : IDL.Text,
    'namespace' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : Permission, 'err' : Error });
  const Role = IDL.Record({ 'id' : IDL.Text, 'name' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : Role, 'err' : Error });
  const Result_11 = IDL.Variant({
    'ok' : IDL.Record({ 'permission' : IDL.Text, 'role' : IDL.Text }),
    'err' : Error,
  });
  const Result_10 = IDL.Variant({ 'ok' : Client, 'err' : Error });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Vec(Role), 'err' : Error });
  const Result_9 = IDL.Variant({ 'ok' : IDL.Vec(Client), 'err' : Error });
  const Result_8 = IDL.Variant({ 'ok' : IDL.Vec(Config), 'err' : Error });
  const Result_7 = IDL.Variant({ 'ok' : IDL.Vec(Namespace), 'err' : Error });
  const Result_6 = IDL.Variant({ 'ok' : IDL.Vec(Permission), 'err' : Error });
  const Service = IDL.Service({
    'addClient' : IDL.Func([Client], [Result_4], []),
    'addClientRole' : IDL.Func([IDL.Principal, IDL.Text], [Result_12], []),
    'addConfig' : IDL.Func([Config], [Result_3], []),
    'addGroup' : IDL.Func([Group], [Result_13], []),
    'addNamespace' : IDL.Func([Namespace], [Result_2], []),
    'addPermission' : IDL.Func([Permission], [Result_1], []),
    'addRole' : IDL.Func([Role], [Result], []),
    'addRolePermission' : IDL.Func([IDL.Text, IDL.Text], [Result_11], []),
    'deleteClient' : IDL.Func([IDL.Principal], [Result_10], []),
    'deleteClientRole' : IDL.Func([IDL.Principal, IDL.Text], [Result_12], []),
    'deleteConfig' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [Result_3], []),
    'deleteNamespace' : IDL.Func([IDL.Text], [Result_2], []),
    'deletePermission' : IDL.Func([IDL.Text], [Result_1], []),
    'deleteRole' : IDL.Func([IDL.Text], [Result], []),
    'deleteRolePermission' : IDL.Func([IDL.Text, IDL.Text], [Result_11], []),
    'getClientByPrincipal' : IDL.Func([IDL.Principal], [Result_10], ['query']),
    'getClientRoles' : IDL.Func([IDL.Principal], [Result_5], ['query']),
    'getClients' : IDL.Func([], [Result_9], ['query']),
    'getConfigs' : IDL.Func([IDL.Text, IDL.Text], [Result_8], ['query']),
    'getNamespaces' : IDL.Func([], [Result_7], ['query']),
    'getPermissionById' : IDL.Func([IDL.Text], [Result_1], ['query']),
    'getPermissions' : IDL.Func([], [Result_6], ['query']),
    'getRoleById' : IDL.Func([IDL.Text], [Result], ['query']),
    'getRolePermissions' : IDL.Func([IDL.Text], [Result_6], ['query']),
    'getRoles' : IDL.Func([], [Result_5], ['query']),
    'sendMessage' : IDL.Func([], [], []),
    'subscribe' : IDL.Func(
        [IDL.Text, IDL.Func([IDL.Vec(Config)], [], [])],
        [],
        [],
      ),
    'updateClient' : IDL.Func([Client], [Result_4], []),
    'updateConfig' : IDL.Func([Config], [Result_3], []),
    'updateNamespace' : IDL.Func([Namespace], [Result_2], []),
    'updatePermission' : IDL.Func([Permission], [Result_1], []),
    'updateRole' : IDL.Func([Role], [Result], []),
  });
  return Service;
};
export const init = ({ IDL }) => { return []; };
