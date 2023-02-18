import { deleteWalletCatchToken, saveWalletCacheToken, updateHideSmallBalance } from "./actions";
import { initialState } from "./states";
import { createReducer } from "@reduxjs/toolkit";

export default createReducer(initialState, (builder) => {
  builder
    .addCase(saveWalletCacheToken, (state, { payload }) => {
      const newSaveCacheTokenIds = [...(state.cacheTokenIds ?? []), ...(payload || [])];

      return {
        ...state,
        cacheTokenIds: newSaveCacheTokenIds,
      };
    })
    .addCase(deleteWalletCatchToken, (state, { payload }) => {
      const newDelCacheTokenIds = (state.cacheTokenIds ?? []).filter((token) => !(payload || []).includes(token));

      return {
        ...state,
        cacheTokenIds: newDelCacheTokenIds,
      };
    })
    .addCase(updateHideSmallBalance, (state, { payload }) => {
      state.hideSmallBalance = payload;
    });
});
