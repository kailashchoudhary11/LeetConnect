import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const navbar = document.getElementsByClassName("text-label-2 dark:text-dark-label-2 flex w-full items-center")[0];
const root = document.createElement("div");
root.style.margin = "0";
root.style.padding = "0";
root.classList.add("cursor-pointer");
root.id = "lc-root";
const thirdChild = navbar.children[2];
navbar.insertBefore(root, thirdChild.nextSibling);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);