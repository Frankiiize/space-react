import React, { useContext, useState } from "react";
import '../styles/pages/destinations.scss'
import { DataContext } from "../context/DataContext";
import { useGetData } from "../hooks/useGetData";

const Destinations = () => {
  const { destinations } = useContext(DataContext);
  const [ element, setElement ] = useState('Moon')
  const handleElement = (element) => {
    setElement(element.name)
  }
  const show = destinations.filter(e => e.name === element)
  console.log(show)
  return (
    <>
      <main className="destination__container">
        <h2 className="destination__container-title">
          <span>01</span> pick your destination
        </h2>

        {show
            ? show.map((e, index) => (
                <img key={`Img-${index}-${e.name}`}src={e.images.webp} alt={e.name} />
              ))
            : null}

        <div className="destination__DestenyBtn">
          {destinations.map((element, index) => (
            <button
              key={`Dest-Element-${index}`}
              onClick={() => handleElement(element)}
            >
              {element.name}
            </button>
          ))}

          {show
            ? show.map((e, index) => (
              <div  key={`DestName-${index}-${e.name}`}>
                <p>{e.name}</p>
                <p>{e.description}</p>
              </div>
              ))
            : null}
        </div>
      </main>
    </>
  );
}

export { Destinations };