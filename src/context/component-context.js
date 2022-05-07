import { createContext } from "react";
import { useState } from "react";

const ComponentContext = createContext();

const ComponenentProvider = ({ children }) => {
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  return (
    <ComponentContext.Provider value={{ sidebarDisplay, setSidebarDisplay }}>
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponenentProvider };
