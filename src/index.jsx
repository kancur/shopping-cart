import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routes from "./Routes";
import StoreProvider from "./components/dataStore";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Routes />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
