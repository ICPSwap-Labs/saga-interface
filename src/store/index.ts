import { configureStore } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";
import allReducer from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { SnackbarState } from "./snackbar/states";
import { LoadingState } from "./loadingReducer";
import { GlobalState } from "./global/states";

export interface AllState {
  loading: LoadingState;
  snackbar: SnackbarState;
  global: GlobalState;
}

const rootPersistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["session", "loading", "snackbar"],
  version: 1,
};

const rootReducer = combineReducers({
  ...allReducer,
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
