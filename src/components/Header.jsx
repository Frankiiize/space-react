import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { pages } = useContext(DataContext)
  return(
    <header>
    <nav>
      <ul>
      <li>
        <Link to="/">home</Link>
      </li>
        {pages.map((element, index) => (
          <li key={index}>
            <Link to={element}>{element}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
}

export { Header };