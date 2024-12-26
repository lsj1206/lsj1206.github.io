// gatsby browser
import React from "react";
import { ThemeProvider } from "./src/context/ThemeProvider";
// Assets
import "./src/styles/prism-nord.css";
// Component
import Layout from "./src/components/layouts/Layout";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
