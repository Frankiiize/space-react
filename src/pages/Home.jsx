import React from "react";
import { Header } from '../components/Header.jsx' 
const Home = () => {
  return (
    <>
        <main>
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
            <button className="btnContainer-mainBtn">explore</button>
          </div>
        </main>
    </>
  )
}

export { Home }