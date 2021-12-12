import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Crew = () => {
  const { crew } = useContext(DataContext)
  return(
    <>
      <h2>mett your crew</h2>
    {crew.map((element, index) => (
      <div key={`Crew-Element-${index}`}>
        <p>{element.role}</p>
        <p style={{color:'blue'}}>{element.name}</p>
        <p>{element.bio}</p>
      </div>
    ))}
    </>
  );
}

export { Crew };