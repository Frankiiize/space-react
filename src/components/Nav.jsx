import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";



const Nav = ({setBackground}) => {
  const { pages } = useContext(DataContext);
 
  const handleBackGround = (element) => {
    setBackground(element)
  }
  const screenWidth = window.screen.width;
 console.log(pages);
  return(
    <>
      <ul>
        <li>
        
          <NavLink 
            exact 
            activeClassName={screenWidth > 520 ? "activeNavlink" : null }
            onClick={() => handleBackGround("home__Layaout")}  
            to="/space-react/"
            >
              <span>00</span>
              home
            </NavLink>
        </li>
          {pages.map((element, index) => (
            <li key={index}>
             
              <NavLink
                activeClassName={screenWidth > 520 ? "activeNavlink" : null }
                to={`/space-react/${element}`}
                onClick={() => {
                  handleBackGround(element);
                  }} 
                >
                  <span>{`0${index + 1}`}</span>
                  {`${element}`}
                </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}

export { Nav };