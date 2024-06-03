import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import TabUI from "./TabUI.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        {/* <App /> */}
        <TabUI />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
