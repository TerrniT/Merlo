import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./style/global.css"


const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <App/>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
