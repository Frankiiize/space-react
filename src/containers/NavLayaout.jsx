import React, { useState } from "react";
import { Header } from "../components/Header";
import { BgLayaout } from "./BgLayaout";

const NavLayaout = ({children}) => {
  const [ backGround, setBackground ] = useState(false);
  return(
    <>
      <Header
        setBackground={setBackground}
      />
      <BgLayaout
        backGround={backGround}
      />
      {children}
    </>
  );
}

export { NavLayaout };