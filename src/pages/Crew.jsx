import React, { useContext, useState } from "react";
import '../styles/pages/crew.scss'
import { DataContext } from "../context/DataContext";

const Crew = () => {
  const { crew } = useContext(DataContext)
  const [ element, setElement ] = useState('Douglas Hurley')
  console.log(crew)
  const handleElement = (crew) => {
    setElement(crew.name)
  }
  const show = crew.filter(e => e.name === element)
  return(
    <>
    <main className="crew__container">
      <h2 className="crew__container-title">
        <span>02</span> mett your crew
      </h2>
      <div className="crew__container-img">
        {show 
        ? show.map((e, index) => (
          <img 
            
            key={`Crew-Image-${e.name}${index}`}
            src={e.images.webp} 
            alt={e.name}
          />
        ))
        : null
        }
      </div>
    <div className="crew__card">
      <div  className="crew__card-selectBtn">
        {crew.map((e,index) => (
          <div
          className="crew__card-btn"
          key={`Cre-btn-${e.name}${index}`}
          >
            <button
            className={e.name === element ? 'crewBtnActive' : null} 
            onClick={() => handleElement(e)}
            >
            </button>

          </div>
        ))}
      </div>
        {show.map((element, index) => (
          <div className="crew__card-description" key={`Crew-Element-${index}`}>
            <span>{element.role}</span>
            <h5>{element.name}</h5>
            <p>{element.bio}</p>
          </div>
        ))}

    </div>
    </main>

    </>
  );
}

export { Crew };