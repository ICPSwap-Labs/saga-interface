import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { saveWalletCacheToken, deleteWalletCatchToken, updateHideSmallBalance } from "./actions";
import { useCacheTokenList } from "store/global/hooks";
import { useImportedTokens } from "store/token/cache/hooks";

export function useWalletCatchTokenIds() {
  return useAppSelector((state) => state.wallet.cacheTokenIds);
}

export function useWalletTokens() {
  const globalCacheTokenList = useCacheTokenList();
  const importedTokens = useImportedTokens();
  const cacheTokenIds = useWalletCatchTokenIds() ?? [];

  let tokens = [];

  for (let i = 0; i < cacheTokenIds.length; i++) {
    const tokenId = cacheTokenIds[i];
    const token = globalCacheTokenList.filter((token) => token.canisterId?.toString() === tokenId)[0];

    if (token) {
      tokens.push(token);
    } else {
      if (!!importedTokens[tokenId]) {
        tokens.push(importedTokens[tokenId]);
      }
    }
  }

  return tokens;
}

export function useWalletTokenCanisterIds() {
  const globalCacheTokenList = useCacheTokenList();
  const importedTokens = useImportedTokens();
  const cacheTokenIds = useWalletCatchTokenIds() ?? [];

  let tokens = [];

  for (let i = 0; i < cacheTokenIds.length; i++) {
    const tokenId = cacheTokenIds[i];
    const token = globalCacheTokenList.filter((token) => token.canisterId?.toString() === tokenId)[0];

    if (token) {
      tokens.push(token);
    } else {
      if (!!importedTokens[tokenId]) {
        tokens.push(importedTokens[tokenId]);
      }
    }
  }

  return tokens;
}

export function useSaveCacheTokenCallback() {
  const dispatch = useAppDispatch();

  return useCallback(
    (cacheTokens) => {
      dispatch(saveWalletCacheToken(cacheTokens));
    },
    [dispatch]
  );
}

export function useDeleteCacheTokenCallback() {
  const dispatch = useAppDispatch();

  return useCallback(
    (cacheTokens) => {
      dispatch(deleteWalletCatchToken(cacheTokens));
    },
    [dispatch]
  );
}

export function useUpdateHideSmallBalanceManager(): [boolean, (hide: boolean) => void] {
  const dispatch = useAppDispatch();
  const hideSmallBalance = useAppSelector((state) => state.wallet.hideSmallBalance);

  const updateHideSmallBalanceCallback = useCallback(
    (hideSmallBalance) => {
      dispatch(updateHideSmallBalance(hideSmallBalance));
    },
    [dispatch]
  );

  return useMemo(
    () => [hideSmallBalance, updateHideSmallBalanceCallback],
    [hideSmallBalance, updateHideSmallBalanceCallback]
  );
}
