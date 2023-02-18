export const idlFactory = ({ IDL }) => {
  const KVPair = IDL.Record({ 'k' : IDL.Text, 'v' : IDL.Nat });
  const ProposalInfo = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'endTime' : IDL.Int,
    'createTime' : IDL.Int,
    'createUser' : IDL.Text,
    'state' : IDL.Nat,
    'createAddress' : IDL.Text,
    'beginTime' : IDL.Int,
    'options' : IDL.Vec(KVPair),
  });
  const BoolResult = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Chunk = IDL.Record({
    'content' : IDL.Vec(IDL.Nat8),
    'batch_id' : IDL.Nat,
  });
  const NatResult = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Page_2 = IDL.Record({
    'content' : IDL.Vec(ProposalInfo),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_4 = IDL.Variant({ 'ok' : Page_2, 'err' : IDL.Text });
  const UserVoteRecord = IDL.Record({
    'voteTime' : IDL.Int,
    'address' : IDL.Text,
    'usedProof' : IDL.Nat,
    'options' : IDL.Vec(KVPair),
  });
  const Page_1 = IDL.Record({
    'content' : IDL.Vec(UserVoteRecord),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_3 = IDL.Variant({ 'ok' : Page_1, 'err' : IDL.Text });
  const UserVotePowersInfo = IDL.Record({
    'availablePowers' : IDL.Nat,
    'address' : IDL.Text,
    'usedPowers' : IDL.Nat,
  });
  const Page = IDL.Record({
    'content' : IDL.Vec(UserVotePowersInfo),
    'offset' : IDL.Nat,
    'limit' : IDL.Nat,
    'totalElements' : IDL.Nat,
  });
  const ResponseResult_2 = IDL.Variant({ 'ok' : Page, 'err' : IDL.Text });
  const ProjectState = IDL.Record({
    'tokenCid' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'managerAddress' : IDL.Text,
  });
  const ResponseResult_1 = IDL.Variant({
    'ok' : ProjectState,
    'err' : IDL.Text,
  });
  const ResponseResult = IDL.Variant({ 'ok' : ProposalInfo, 'err' : IDL.Text });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : IDL.Func([], [], []),
    }),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const StreamingCallbackHttpResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const TextResult = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({
    'chunkSize' : IDL.Func([], [IDL.Nat], ['query']),
    'clearChunk' : IDL.Func([], [IDL.Bool], []),
    'commit_batch' : IDL.Func(
        [
          IDL.Record({
            'batch_id' : IDL.Nat,
            'content_type' : IDL.Text,
            'chunk_ids' : IDL.Vec(IDL.Nat),
          }),
        ],
        [],
        [],
      ),
    'create' : IDL.Func([ProposalInfo], [BoolResult], []),
    'create_batch' : IDL.Func([], [IDL.Record({ 'batch_id' : IDL.Nat })], []),
    'create_chunk' : IDL.Func(
        [Chunk],
        [IDL.Record({ 'chunk_id' : IDL.Nat })],
        [],
      ),
    'cycleAvailable' : IDL.Func([], [NatResult], []),
    'cycleBalance' : IDL.Func([], [NatResult], []),
    'findPage' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Nat), IDL.Nat, IDL.Nat],
        [ResponseResult_4],
        ['query'],
      ),
    'findRecordPage' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Nat],
        [ResponseResult_3],
        ['query'],
      ),
    'findVotePower' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text), IDL.Nat, IDL.Nat],
        [ResponseResult_2],
        ['query'],
      ),
    'getProject' : IDL.Func([], [ResponseResult_1], ['query']),
    'getProposal' : IDL.Func([IDL.Text], [ResponseResult], ['query']),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'http_request_streaming_callback' : IDL.Func(
        [StreamingCallbackToken],
        [StreamingCallbackHttpResponse],
        ['query'],
      ),
    'maxFileSize' : IDL.Func([IDL.Nat], [TextResult], []),
    'setOwner' : IDL.Func([IDL.Principal], [BoolResult], []),
    'setProject' : IDL.Func([ProjectState], [BoolResult], []),
    'setState' : IDL.Func([IDL.Text, IDL.Nat], [BoolResult], []),
    'setVotePower' : IDL.Func(
        [IDL.Text, IDL.Vec(UserVotePowersInfo)],
        [BoolResult],
        [],
      ),
    'vote' : IDL.Func([IDL.Text, IDL.Text, IDL.Nat], [BoolResult], []),
  });
};
export const init = ({ IDL }) => { return []; };
