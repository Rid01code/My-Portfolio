import ReactDom from "react-dom";
import React from "react";
import App from "./_app";
import { ThemeProvider } from "./Context";

ReactDom.render(
    <ThemeProvider>
        <App/> 
    </ThemeProvider>
  , document.getElementById('root')
)