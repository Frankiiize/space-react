import React, { useState } from "react";
import { Header } from "../components/Header";

const NavLayaout = ({children}) => {
  const [ backGround, setBackground ] = useState("home__Layaout");
  return(
    <>
      <Header
        setBackground={setBackground}
      />
      {children}
    </>
  );
}

export { NavLayaout };