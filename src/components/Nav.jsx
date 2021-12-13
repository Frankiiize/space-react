import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";



const Nav = ({setBackground}) => {
  const { pages } = useContext(DataContext)
  const handleBackGround = (element) => {
    setBackground(element)

  }
  return(
    <>
      <ul>
        <li>
          <Link onClick={() => handleBackGround("home__Layaout")}  to="/">home</Link>
        </li>
          {pages.map((element, index) => (
            <li key={index}>
              <Link onClick={() => handleBackGround(element)} to={element}>{element}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export { Nav };