import React from "react";
import '../styles/containers/bg.scss'
const BgLayaout = ({children, backGround}) => {
  
  return(
    <>
    <div className={true ? `${backGround}`: "null" }>
      {children}
    </div>
    </>
  );
}

export { BgLayaout };