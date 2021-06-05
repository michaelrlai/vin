import { createContext, useState } from "react";

export const VinContext = createContext();

export const VinContextProvider = ({ children }) => {
  const [currentVin, setCurrentVin] = useState();

  return (
    <VinContext.Provider value={{ currentVin, setCurrentVin }}>
      {children}
    </VinContext.Provider>
  );
};
