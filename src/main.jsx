import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle.js";
import Router from "./application/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Router />
  </StrictMode>
);
