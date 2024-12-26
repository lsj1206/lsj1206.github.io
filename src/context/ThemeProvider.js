// Theme Provider
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { light, dark } from "../styles/Theme";
// Hooks
import useTheme from "../hooks/useTheme";

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultValue);

export const ThemeProvider = ({ children }) => {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.theme === "light" ? light : dark}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
