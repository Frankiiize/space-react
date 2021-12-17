import React, { useContext, useState } from "react";
import '../styles/pages/technology.scss';
import { DataContext } from "../context/DataContext";

const Technology = () => {
  const { tech } = useContext(DataContext);
  const [ element, setElement ] = useState('Launch vehicle')
  const handleElement = (e) => {
    setElement(e.name)
  }
  const show = tech.filter(e => e.name === element);
  console.log(show)
  return(
    <>
    <main className="tech__container">
    <h2 className="tech__container-title">
        <span>03</span>space launch vehicle
      </h2>

      <div className="tech__container-img">
        {show.map((e, index) => (
          <picture key={`tech-Image-${e.name}${index}`}>
            <source media="(min-width:768px)" srcSet={e.images.portrait}/>
            <img 
              src={e.images.landscape} 
              alt={e.name} />
          </picture>
          ))}
      </div>

      <div className="tech__card">
      <div  className="tech__card-selectBtn">
        {tech.map((e, index) => (
          <div 
          className={`tech__card-btn ${e.name === element && "techBtnActive" }`}   
          key={`btnTech-Element-${index}`}>
            <button 
            onClick={() => handleElement(e)}
           >
              {index + 1}
            </button>
          </div>
        ))}
      </div>

        {show.map((element, index) => (
          <div className="tech__card-description" key={`technology-Element-${index}`}>
            <span>the terminology</span>
            <h5>{element.name}</h5>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}

export { Technology };