import customizationReducer from "./customization/reducer";
import snackbarReducer from "./snackbar/reducer";
import walletReducer from "./wallet/reducer";
import globalReducer from "./global/reducer";
import loadingReducer from "./loadingReducer";

import tokenReducer from "./token/reducer";
import launchpadReducer from "./launchpad/reducer";
import sessionReducer from "./session/reducer";
import tokenCacheReducer from "./token/cache/reducer";
import callReducer from "./call/reducer";

export { sessionReducer, launchpadReducer, tokenCacheReducer };

export default {
  customization: customizationReducer,
  snackbar: snackbarReducer,
  loading: loadingReducer,
  wallet: walletReducer,
  global: globalReducer,
  token: tokenReducer,
  launchpad: launchpadReducer,
  call: callReducer,
};
