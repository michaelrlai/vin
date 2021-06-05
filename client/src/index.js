import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { VinContextProvider } from "./context/VinContext";

ReactDOM.render(
  <React.StrictMode>
    <VinContextProvider>
      <App />
    </VinContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
