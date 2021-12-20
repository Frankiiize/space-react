import React from "react";
import './styles/globals.scss'
import { Destinations } from "./pages/Destinations";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NavLayaout } from "./containers/NavLayaout";
import { BgLayaout } from "./containers/BgLayaout";
function App() {
  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <NavLayaout>
          <BgLayaout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/destinations" component={Destinations}/>
              <Route exact path="/crew" component={Crew}/>
              <Route exact path="/technology" component={Technology}/>
              <Route path={"/*"} component={() => <div>not found</div>} />
            </Switch>
          </BgLayaout>
        </NavLayaout>
    </BrowserRouter>
    </DataProvider>
    </>

  );
}

export default App;
