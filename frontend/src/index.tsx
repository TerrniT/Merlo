import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import App from "./App"
import "./style/style.css"
import { ThirdWebContextProvider } from "./context"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <ThirdWebContextProvider>
        <App />
      </ThirdWebContextProvider>
    </Router>
  </ThirdwebProvider>,
)
