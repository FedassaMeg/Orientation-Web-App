import React from "react";
import ReactDOM from "react-dom";
import AppProviders from "./components/utils/context";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

serviceWorker.unregister();
