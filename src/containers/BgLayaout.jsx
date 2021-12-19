import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/containers/bg.scss'
const BgLayaout = ({children, backGround}) => {
  const location = useLocation();
  const defaulBg = location.pathname.replace('/space-react/','');
  console.log(defaulBg)
  return(
    <>
    <div className={backGround ? `${backGround}`: defaulBg.length > 0 ? ` ${defaulBg} ` : 'home__Layaout'}>
      {children}
    </div>
    </>
  );
}

export { BgLayaout };