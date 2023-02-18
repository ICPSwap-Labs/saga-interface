export interface WalletState {
  cacheTokenIds: string[];
  hideSmallBalance: boolean;
}

export const initialState: WalletState = {
  cacheTokenIds: [],
  hideSmallBalance: false,
};
