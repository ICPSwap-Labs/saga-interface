import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addAdmin' : (arg_0: string) => Promise<boolean>,
  'addToken' : (arg_0: string) => Promise<undefined>,
  'balance' : (arg_0: string) => Promise<bigint>,
  'balanceList' : () => Promise<
      Array<{ 'tokenId' : string, 'balance' : bigint }>
    >,
  'cycleAvailable' : () => Promise<bigint>,
  'cycleBalance' : () => Promise<bigint>,
  'getAdminList' : () => Promise<Array<string>>,
  'getWalletAddress' : () => Promise<Principal>,
  'removeAdmin' : (arg_0: string) => Promise<boolean>,
}
