import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import du composant principal
import "./styles.css"; // Import des styles globaux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
