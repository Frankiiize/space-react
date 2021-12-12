import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Technology = () => {
  const { tech } = useContext(DataContext)
  return(
    <>
      <h2>space launch vehicle</h2>
    {tech.map((element, index) => (
      <button key={`btnTech-Element-${index}`}>{index + 1}</button>
    ))}
    {tech.map((element, index) => (
      <div key={`technology-Element-${index}`}>
        <p>{element.name}</p>
        <p>{element.description}</p>
      </div>
    ))}
    </>
  );
}

export { Technology };