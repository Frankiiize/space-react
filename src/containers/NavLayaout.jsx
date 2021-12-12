import React from "react";
import { Header } from "../components/Header";

const NavLayaout = ({children}) => {
  return(
    <>
      <Header/>
      {children}
    </>
  );
}

export { NavLayaout };