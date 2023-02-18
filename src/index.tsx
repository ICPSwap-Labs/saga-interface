import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store, { persistor } from "./store/index";
import App from "./App";
import config from "./config";
import "./assets/scss/global.scss";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./actor/idlFactory";
import { LanguageProvider } from "./i18n";

window.onerror = (msg, url, row, col, error) => {
  const _error = error ? error.toString() : "";
  console.log(msg, url, row, col, error, "msg, row, col, error");
  // update users not reload error debug
  if (/Loading chunk *.{1,} failed./.test(_error) || /Unexpected token \'<\'/.test(_error)) {
    window.location.reload();
  }
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={config.basename}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
