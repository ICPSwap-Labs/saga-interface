export const idlFactory = ({ IDL }) => {
  const Amount = IDL.Nat;
  const TxIndex = IDL.Nat;
  const Timestamp = IDL.Nat64;
  const TransferError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Amount }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : TxIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Amount }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Amount }),
  });
  const TransferResult = IDL.Variant({ 'Ok' : TxIndex, 'Err' : TransferError });
  const TransferFromError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'InsufficientAllowance' : IDL.Record({ 'allowance' : Amount }),
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Amount }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : TxIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Amount }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Amount }),
  });
  const TransferFromResult = IDL.Variant({
    'Ok' : TxIndex,
    'Err' : TransferFromError,
  });
  return IDL.Service({
    'getSubaccount' : IDL.Func([], [IDL.Text], []),
    'testTokenAdapterBalanceOf' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Principal, IDL.Opt(IDL.Principal)],
        [IDL.Nat],
        [],
      ),
    'testTokenAdapterTransfer' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Opt(IDL.Principal),
          IDL.Principal,
          IDL.Opt(IDL.Principal),
          Amount,
        ],
        [TransferResult],
        [],
      ),
    'testTokenAdapterTransferFrom' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Principal, IDL.Principal, Amount],
        [TransferFromResult],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
