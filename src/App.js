import React from "react";
import { Header } from './components/Header.jsx'
import { Destinations } from "./pages/Destinations";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <>
    <DataProvider>
        <Header/>
        <Destinations/>
        <Crew />
        <Technology />
    </DataProvider>
    </>

  );
}

export default App;
