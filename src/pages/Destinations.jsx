import React, { useContext, useState } from "react";
import '../styles/pages/destinations.scss'
import { DataContext } from "../context/DataContext";
import { BgLayaout } from "../containers/BgLayaout";

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
                <img
                  key={`Img-${index}-${e.name}`}
                  src={e.images.webp}
                  alt={e.name}
                />
              ))
            : null}
        <div className="destination__containerCard">
        <div className="destination__containerCard-btn">
              {destinations.map((e, index) => (
                <button
                  className={e.name === element ? 'active' : null}
                  key={`Dest-Element-${index}`}
                  onClick={() => handleElement(e)}
                >
                  {e.name}
                </button>
              ))}
        </div>
      
          {show
            ? show.map((e, index) => (
                <div className="destination__containerCard-description" key={`DestName-${index}-${e.name}`}>
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                  <div className="destination__containerCard-description-line"></div>
                  <div className="destination__containerCard-description-info">

                    <div className="destination__containerCard-description-distance ">
                      <p>avg. distance</p>
                      <span>{e.distance}</span>
                    </div>
                    <div className="destination__containerCard-description-time">
                      <p>Est. travel time</p>
                      <span>{e.travel}</span>
                    </div>
                  </div>
                </div>
              ))
            : null}
      
        </div>
      </main>
    </>
  );
}

export { Destinations };