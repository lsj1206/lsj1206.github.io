// gatsby ssr
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<meta name="google-site-verification" content="5vTm1MVlmRNKBITz7_BNAkzI9YOP6FO5Qgun-tlMe8o" />]);
};
