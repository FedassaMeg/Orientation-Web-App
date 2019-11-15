import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import AppProviders from "./components/context";
import App from "./components/App";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

serviceWorker.unregister();
