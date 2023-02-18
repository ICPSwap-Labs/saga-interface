export const idlFactory = ({ IDL }) => {
  const ResponseResult_8 = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const BoolResult = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const TokenIndex = IDL.Nat;
  const User = IDL.Text;
  const AllowanceRequest = IDL.Record({
    'token' : TokenIndex,
    'owner' : User,
    'spender' : User,
  });
  const Balance__1 = IDL.Nat;
  const ResponseResult_7 = IDL.Variant({ 'ok' : Balance__1, 'err' : IDL.Text });
  const ApproveRequest = IDL.Record({ 'token' : TokenIndex, 'spender' : User });
  const ApproveAllRequest = IDL.Record({
    'approved' : IDL.Bool,
    'spender' : User,
  });
  const BalanceRequest = IDL.Record({ 'token' : TokenIndex, 'user' : User });
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const TokenIndex__1 = IDL.Nat;
  const TextResult = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const KVPair = IDL.Record({ 'k' : IDL.Text, 'v' : IDL.Text });
  const TokenMetadata = IDL.Record({
    'cId' : IDL.Text,
    'tokenId' : IDL.Nat,
    'owner' : User,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'minter' : User,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'mintTime' : IDL.Int,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const Page_1 = IDL.Record({
    'content' : IDL.Vec(TokenMetadata),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_5 = IDL.Variant({ 'ok' : Page_1, 'err' : IDL.Text });
  const ResponseResult_6 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Nat, IDL.Nat, IDL.Text, IDL.Text),
    'err' : IDL.Text,
  });
  const ResponseResult_3 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Text),
    'err' : IDL.Text,
  });
  const User__1 = IDL.Text;
  const Memo = IDL.Text;
  const TxType = IDL.Variant({
    'handsel' : IDL.Null,
    'mint' : IDL.Null,
    'transaction' : IDL.Null,
  });
  const Balance = IDL.Nat;
  const TransferRecord = IDL.Record({
    'to' : User,
    'tokenId' : TokenIndex,
    'from' : User,
    'hash' : IDL.Text,
    'memo' : Memo,
    'time' : IDL.Int,
    'tokenName' : IDL.Text,
    'txType' : TxType,
    'caller' : User,
    'price' : Balance,
    'amount' : Balance,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(TransferRecord),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_4 = IDL.Variant({ 'ok' : Page, 'err' : IDL.Text });
  const ResponseResult_2 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Nat, IDL.Nat),
    'err' : IDL.Text,
  });
  const ResponseResult_1 = IDL.Variant({
    'ok' : TokenMetadata,
    'err' : IDL.Text,
  });
  const MintRequest = IDL.Record({
    'owner' : User,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'image' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const ResponseResult = IDL.Variant({
    'ok' : TokenIndex__1,
    'err' : IDL.Text,
  });
  const MintRequests = IDL.Record({
    'owner' : User,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'count' : IDL.Nat,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'image' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIndex,
    'from' : User,
    'memo' : Memo,
    'amount' : Balance,
  });
  return IDL.Service({
    '_burn' : IDL.Func([IDL.Nat], [ResponseResult_8], []),
    'addAdmin' : IDL.Func([IDL.Text], [BoolResult], []),
    'allowance' : IDL.Func([AllowanceRequest], [ResponseResult_7], ['query']),
    'allowanceAll' : IDL.Func([AllowanceRequest], [BoolResult], ['query']),
    'approve' : IDL.Func([ApproveRequest], [BoolResult], []),
    'approveAll' : IDL.Func([ApproveAllRequest], [BoolResult], []),
    'approveForAll' : IDL.Func([ApproveAllRequest], [BoolResult], []),
    'balance' : IDL.Func([BalanceRequest], [NatResult], ['query']),
    'bearer' : IDL.Func([TokenIndex__1], [TextResult], ['query']),
    'cycleAvailable' : IDL.Func([], [IDL.Nat], []),
    'cycleBalance' : IDL.Func([], [IDL.Nat], []),
    'findMatchNFTLists' : IDL.Func(
        [IDL.Text, IDL.Vec(KVPair), IDL.Nat, IDL.Nat],
        [ResponseResult_5],
        [],
      ),
    'findMintConfig' : IDL.Func([], [ResponseResult_6], ['query']),
    'findSeriesType' : IDL.Func([], [ResponseResult_3], ['query']),
    'findTokenList' : IDL.Func(
        [User__1, IDL.Nat, IDL.Nat],
        [ResponseResult_5],
        ['query'],
      ),
    'findTokenMarket' : IDL.Func(
        [IDL.Vec(IDL.Text), IDL.Nat, IDL.Nat],
        [ResponseResult_5],
        ['query'],
      ),
    'findTokenTxRecord' : IDL.Func(
        [User__1, IDL.Nat, IDL.Nat],
        [ResponseResult_4],
        ['query'],
      ),
    'findTxRecord' : IDL.Func(
        [TokenIndex__1, IDL.Nat, IDL.Nat],
        [ResponseResult_4],
        ['query'],
      ),
    'getAdminList' : IDL.Func([], [ResponseResult_3], ['query']),
    'getNftStat' : IDL.Func([], [ResponseResult_2], ['query']),
    'metadata' : IDL.Func([TokenIndex__1], [ResponseResult_1], ['query']),
    'mint' : IDL.Func([MintRequest], [ResponseResult], []),
    'mint_batch' : IDL.Func([MintRequests], [ResponseResult], []),
    'ownerNFTCount' : IDL.Func([User__1], [NatResult], ['query']),
    'removeAdmin' : IDL.Func([IDL.Text], [BoolResult], []),
    'setMintConfig' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Text, IDL.Text],
        [BoolResult],
        [],
      ),
    'setOwner' : IDL.Func([IDL.Text], [], ['oneway']),
    'setSeriesType' : IDL.Func([IDL.Text, IDL.Bool], [BoolResult], []),
    'setSwapPositionManager' : IDL.Func([IDL.Text], [], ['oneway']),
    'supply' : IDL.Func([], [NatResult], ['query']),
    'swapPositionManager' : IDL.Func([], [IDL.Text], []),
    'transfer' : IDL.Func([TransferRequest], [NatResult], []),
    'updateCanisterImage' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
