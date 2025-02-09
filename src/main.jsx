import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
