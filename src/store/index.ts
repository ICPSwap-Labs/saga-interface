import { configureStore } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";
import allReducer, { sessionReducer, tokenCacheReducer } from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { SessionState } from "./session/states";
import { GlobalState } from "./global/states";
import { LaunchpadState } from "./launchpad/states";
import { SnackbarState } from "./snackbar/states";
import { LoadingState } from "./loadingReducer";

import { TokenState } from "./token/states";
import { WalletState } from "./wallet/states";
import { CustomizationState } from "./customization/states";

import { TokenCacheState } from "./token/cache/states";
import { CallState } from "./call/states";

import { PersistState } from "redux-persist/es/types";

interface PersistPartial {
  _persist: PersistState;
}
export interface AllState {
  session: SessionState & PersistPartial;
  global: GlobalState;
  loading: LoadingState;
  cache: any;
  snackbar: SnackbarState;

  token: TokenState;
  tokenCache: TokenCacheState;
  launchpad: LaunchpadState;
  customization: CustomizationState;
  wallet: WalletState;

  call: CallState;
}

const defaultStorageConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
  version: 0,
};

const rootPersistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [
    "cache",
    "session",
    "global",
    "loading",
    "snackbar",
    "swap",
    "swapLiquidity",
    "swapBurn",
    "token",
    "launchpad",
    "call",
    "step",
    "swapV2",
    "swapV2Liquidity",
    "swapV2Burn",
  ],
  migrate: (state: any) => {
    let newState = {};

    if (state?._persist?.version === -1) {
      newState = { ...(state ?? {}), auth: {} };
    } else {
      newState = { ...(state ?? {}) };
    }

    return Promise.resolve(newState);
  },
  version: 1,
};

const SessionPersistConfig = {
  key: "session",
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
  version: 3,
};

const TokenCachePersistConfig = {
  ...defaultStorageConfig,
  key: "tokenCache",
  version: 1,
};

const rootReducer = combineReducers({
  ...allReducer,
  session: persistReducer<SessionState, AnyAction>(SessionPersistConfig, sessionReducer),
  tokenCache: persistReducer<TokenCacheState, AnyAction>(TokenCachePersistConfig, tokenCacheReducer),
});

// @ts-ignore
const PersistReducer = persistReducer<AllState, AnyAction>(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: PersistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
