import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.createElement("div");
root.id = "crx-root";
const node = document.getElementsByClassName("text-label-2 dark:text-dark-label-2 flex w-full items-center")[0]
node.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);