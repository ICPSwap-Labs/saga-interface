export const idlFactory = ({ IDL }) => {
  const AccountIdentifier__1 = IDL.Text;
  const BoolResult = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const AllowanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance__1 = IDL.Nat;
  const CommonError = IDL.Variant({
    'InsufficientBalance' : IDL.Null,
    'InvalidToken' : TokenIdentifier,
    'Unauthorized' : AccountIdentifier,
    'Other' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const Balance = IDL.Nat;
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
  });
  const ApproveAllRequest = IDL.Record({
    'approved' : IDL.Bool,
    'spender' : User,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const CommonError__1 = IDL.Variant({
    'InsufficientBalance' : IDL.Null,
    'InvalidToken' : TokenIdentifier,
    'Unauthorized' : AccountIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({
    'ok' : Balance,
    'err' : CommonError__1,
  });
  const TokenIdentifier__1 = IDL.Text;
  const Result_4 = IDL.Variant({
    'ok' : AccountIdentifier__1,
    'err' : CommonError,
  });
  const TokenIndex = IDL.Nat32;
  const ResponseResult_2 = IDL.Variant({ 'ok' : TokenIndex, 'err' : IDL.Text });
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Extension = IDL.Text;
  const ResponseResult_7 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Text, IDL.Text),
    'err' : IDL.Text,
  });
  const User__1 = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const TokenIndex__1 = IDL.Nat32;
  const KVPair = IDL.Record({ 'k' : IDL.Text, 'v' : IDL.Text });
  const IcsMetadata = IDL.Record({
    'cId' : IDL.Text,
    'tokenId' : TokenIndex__1,
    'owner' : AccountIdentifier,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'link' : IDL.Text,
    'name' : IDL.Text,
    'minter' : AccountIdentifier,
    'filePath' : IDL.Text,
    'fileType' : IDL.Text,
    'mintTime' : IDL.Int,
    'introduction' : IDL.Text,
    'attributes' : IDL.Vec(KVPair),
    'royalties' : IDL.Nat,
    'nftType' : IDL.Text,
    'artistName' : IDL.Text,
  });
  const Page_2 = IDL.Record({
    'content' : IDL.Vec(IcsMetadata),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_6 = IDL.Variant({ 'ok' : Page_2, 'err' : IDL.Text });
  const Remark = IDL.Text;
  const Memo = IDL.Vec(IDL.Nat8);
  const TransType = IDL.Variant({
    'burn' : IDL.Null,
    'mint' : IDL.Null,
    'approve' : IDL.Null,
    'transfer' : IDL.Null,
  });
  const TransferRecord = IDL.Record({
    'to' : AccountIdentifier,
    'remark' : Remark,
    'tokenId' : TokenIndex__1,
    'from' : AccountIdentifier,
    'hash' : IDL.Text,
    'memo' : IDL.Opt(Memo),
    'time' : IDL.Int,
    'tokenName' : IDL.Text,
    'txType' : TransType,
    'caller' : AccountIdentifier,
    'price' : Balance,
    'amount' : Balance,
  });
  const Page_1 = IDL.Record({
    'content' : IDL.Vec(TransferRecord),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_5 = IDL.Variant({ 'ok' : Page_1, 'err' : IDL.Text });
  const ResponseResult_4 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Text),
    'err' : IDL.Text,
  });
  const NftHolderInfo = IDL.Record({
    'bronze' : IDL.Nat,
    'gold' : IDL.Nat,
    'iron' : IDL.Nat,
    'platinum' : IDL.Nat,
    'silver' : IDL.Nat,
    'roseGold' : IDL.Nat,
  });
  const NftStatInfo = IDL.Record({
    'holderAmount' : IDL.Nat,
    'userMintAmount' : IDL.Nat,
    'officialMintAmount' : IDL.Nat,
    'totalMintAmount' : IDL.Nat,
  });
  const Metadata = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'ownerAccount' : AccountIdentifier,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const ResponseResult_3 = IDL.Variant({
    'ok' : IcsMetadata,
    'err' : IDL.Text,
  });
  const ResponseResult_1 = IDL.Variant({ 'ok' : Balance__1, 'err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError });
  const IcsMintRequest = IDL.Record({
    'owner' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
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
  const MintRequest = IDL.Record({
    'to' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const IcsMintRequests = IDL.Record({
    'owner' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
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
  const Page = IDL.Record({
    'content' : IDL.Vec(AccountIdentifier__1),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult = IDL.Variant({ 'ok' : Page, 'err' : IDL.Text });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Nat, IDL.Nat),
    'err' : IDL.Text,
  });
  const Time = IDL.Int;
  const Listing = IDL.Record({
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : IDL.Nat64,
  });
  const Result = IDL.Variant({
    'ok' : IDL.Vec(
      IDL.Tuple(TokenIndex, IDL.Opt(Listing), IDL.Opt(IDL.Vec(IDL.Nat8)))
    ),
    'err' : CommonError,
  });
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'nonce' : IDL.Opt(IDL.Nat),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'InsufficientAllowance' : IDL.Null,
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  return IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'addAdmin' : IDL.Func([AccountIdentifier__1], [BoolResult], []),
    'allowState' : IDL.Func([IDL.Nat, IDL.Bool], [], []),
    'allowable' : IDL.Func([], [IDL.Nat, IDL.Nat, IDL.Bool], ['query']),
    'allowance' : IDL.Func([AllowanceRequest], [Result_2], ['query']),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'approveForAll' : IDL.Func([ApproveAllRequest], [BoolResult], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'computeSupply' : IDL.Func([], [ResponseResult_2], []),
    'cycleAvailable' : IDL.Func([], [NatResult], []),
    'cycleBalance' : IDL.Func([], [NatResult], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'findCanisterId' : IDL.Func([], [ResponseResult_7], []),
    'findTokenList' : IDL.Func(
        [User__1, IDL.Nat, IDL.Nat],
        [ResponseResult_6],
        ['query'],
      ),
    'findTokenMarket' : IDL.Func(
        [IDL.Vec(IDL.Text), IDL.Nat, IDL.Nat],
        [ResponseResult_6],
        ['query'],
      ),
    'findTokenTxRecord' : IDL.Func(
        [User__1, IDL.Nat, IDL.Nat],
        [ResponseResult_5],
        ['query'],
      ),
    'findTxRecord' : IDL.Func(
        [TokenIdentifier, IDL.Nat, IDL.Nat],
        [ResponseResult_5],
        ['query'],
      ),
    'getAdminList' : IDL.Func([], [ResponseResult_4], ['query']),
    'getAllowances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Vec(AccountIdentifier__1)))],
        ['query'],
      ),
    'getMinter' : IDL.Func([], [IDL.Principal], ['query']),
    'getNftHolderInfo' : IDL.Func([], [NftHolderInfo], ['query']),
    'getNftStat' : IDL.Func([], [NftStatInfo], ['query']),
    'getRegistry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1))],
        ['query'],
      ),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))],
        ['query'],
      ),
    'icsMetadata' : IDL.Func([TokenIndex], [ResponseResult_3], ['query']),
    'isApproveForAll' : IDL.Func(
        [AccountIdentifier__1, AccountIdentifier__1],
        [BoolResult],
        ['query'],
      ),
    'isApproveForToken' : IDL.Func(
        [TokenIndex, AccountIdentifier__1, AccountIdentifier__1],
        [ResponseResult_1],
        ['query'],
      ),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_3], ['query']),
    'mint' : IDL.Func([IcsMintRequest], [ResponseResult_2], []),
    'mintNFT' : IDL.Func([MintRequest], [TokenIndex], []),
    'mint_batch' : IDL.Func([IcsMintRequests], [ResponseResult_2], []),
    'nextTokenId' : IDL.Func([], [TokenIndex], []),
    'ownerNFTCount' : IDL.Func([User__1], [ResponseResult_1], ['query']),
    'queryHolders' : IDL.Func([IDL.Nat, IDL.Nat], [ResponseResult], ['query']),
    'removeAdmin' : IDL.Func([AccountIdentifier__1], [BoolResult], []),
    'removeAllApproval' : IDL.Func([ApproveAllRequest], [BoolResult], []),
    'removeApproval' : IDL.Func([ApproveRequest], [BoolResult], []),
    'setCanisterId' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text)],
        [BoolResult],
        [],
      ),
    'setMinter' : IDL.Func([IDL.Principal], [], []),
    'spenderRemoveApproval' : IDL.Func([TokenIdentifier], [BoolResult], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    'tokenHolds' : IDL.Func([IDL.Text], [Result_1], ['query']),
    'tokens_ext' : IDL.Func([AccountIdentifier__1], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
  });
};
export const init = ({ IDL }) => { return []; };
