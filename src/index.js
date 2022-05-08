import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import { ThemeProvider } from "@emotion/react";
import "./index.css"; // webpack automagically loads this
import theme from "./theme";


const root = createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
);
