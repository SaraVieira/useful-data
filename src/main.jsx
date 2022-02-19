import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "flowbite";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Components/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <Toaster />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
