import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { MyExamInformationProvider } from "Const/EcommerceContext";
ReactDOM.render(
  <React.StrictMode>
    <MyExamInformationProvider>
      <App />
    </MyExamInformationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
