import ReactDom from "react-dom";
import React from "react";
import App from "../src/app.js";
import { ThemeProvider } from "./Context";

ReactDom.render(
    <ThemeProvider>
        <App/> 
    </ThemeProvider>
  , document.getElementById('root')
)