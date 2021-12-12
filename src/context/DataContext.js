import React, { createContext } from "react";
import { useGetData } from "../hooks/useGetData";

const DataContext = createContext({})

const DataProvider = ({children}) => {
  const data = useGetData()
  return(
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };