import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Destinations = () => {
  const { destinations } = useContext(DataContext)
  return(
    <>
      <h2>pick your destination</h2>
      {destinations.map((element, index) => (
        <div key={`Dest-Element-${index}`} style={{margin:'10px auto'}}>
          <li >{element.name}</li>
          <p>{element.description}</p>
          <p>{element.distance}</p>
          <p>{element.travel}</p>
        </div>
      ))}
    </>
  );
}

export { Destinations };