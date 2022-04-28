import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css"; // webpack automagically loads this


const root = createRoot(document.getElementById("root"));

root.render(
    <Home/>
);
