import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { pages } = useContext(DataContext)
  return(
    <header>
    <nav>
      <ul>
        {pages.map((element, index) => (
          <li key={index}>
            <a href={element}>{element}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
}

export { Header };