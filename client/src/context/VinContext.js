import { createContext, useState } from "react";

export const VinContext = createContext();

export const VinContextProvider = ({ children }) => {
  const [currentVin, setCurrentVin] = useState({});
  const [currentImages, setCurrentImages] = useState();

  return (
    <VinContext.Provider
      value={{ currentVin, setCurrentVin, currentImages, setCurrentImages }}
    >
      {children}
    </VinContext.Provider>
  );
};
