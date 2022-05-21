import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
