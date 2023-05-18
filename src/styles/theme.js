import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
