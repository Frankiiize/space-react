import React, { useState } from "react";
import '../styles/components/Header.scss';
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { Nav } from '../components/Nav.jsx'

const Header = ({setBackground}) => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false);
  const [ goinOut, setGoinOut ] = useState(false);
  const handleMenuMobile = () => {
    //debugger
    if(showMobileMenu){
      setGoinOut(true);
      setTimeout(() => {
        setShowMobileMenu(!showMobileMenu);
        setGoinOut(false)
      },500);
    }else {
      setShowMobileMenu(!showMobileMenu);
    }
  }
  return(
    <header>
    <nav className="navContainer">
    <img className="navContainer-logo" src={logo} alt="logo icon"/>
    {!showMobileMenu &&
      <img 
      onClick={handleMenuMobile}
      className="navContainer-hamburger" 
      src={hamburger} 
      alt="logo icon"/>
    }
    {!!showMobileMenu && 
      <>
        <div className={`navContainer__menuMobile-BG ${goinOut ? 'goingOut':null}`}>
          <div className="navContainer__menuMobile" >
            <div className="navContainer__menuMobile-img">
              <img onClick={handleMenuMobile} src={close} alt="close menu" />
            </div>
            <ul>
              <Nav
              setBackground={setBackground} />
            </ul>
          </div>
        </div>
      </>
      }
    <div className="navContainer__menuDesk">
      <Nav
         setBackground={setBackground} 
      />
    </div>
    </nav>
  </header>
  );
}

export { Header };