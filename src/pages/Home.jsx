import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../styles/pages/Home.scss'
const Home = () => {
  const history = useHistory();
  const [ outLine, setOutLine ] = useState(false)

  const handleFlow = () => {
    setOutLine(true)
    setTimeout(() => {
      history.push("./destinations");
      
    },1000);
  }
  return (
    <>
        <main className="home__container">
          <div className="heroContainer">
            <h2 className="heroContainer-text"> So, you want to travel to</h2>
            <h1 className="heroContainer-title">space</h1>
            <p className="heroContainer-description">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="btnContainer">
            <button
              onClick={handleFlow}
              className={`btnContainer-mainBtn ${outLine ? "activeMainBtn" : null } `}
              >
              explore
            </button>
          </div>
        </main>
    </>
  )
}

export { Home }