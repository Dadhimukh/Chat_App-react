import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextprovider } from "./context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextprovider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextprovider>
);
