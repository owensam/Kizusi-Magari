import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
// config.js
const API_BASE_URL = "https://kizusi-magari-backend.vercel.app";
export default API_BASE_URL;


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);