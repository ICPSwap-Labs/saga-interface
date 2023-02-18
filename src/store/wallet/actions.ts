import { createAction } from "@reduxjs/toolkit";

export const saveWalletCacheToken = createAction<string[]>("wallet/saveWalletCacheToken");

export const deleteWalletCatchToken = createAction<string[]>("wallet/deleteWalletCatchToken");

export const updateHideSmallBalance = createAction<boolean>("wallet/updateHideSmallBalance");
