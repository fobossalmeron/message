import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Loader from "./components/loader";
import Message from "./components/message";

import "./App.scss";

function App(props) {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  });

  return (
    <div className="App">
      <Loader class={`loader-fade-out ${hasLoaded && "invisible"}`} />
      <div className={`app-fade-in ${hasLoaded && "visible"}`}>
        <Router>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/3f51b5/Escribe+tu+mensaje" />}
                  />
                  <Route
                    exact
                    path="/message"
                    render={() => <Redirect to="/3f51b5/Escribe+tu+mensaje" />}
                  />
                  <Route
                    name="home"
                    path="/:color/:message"
                    component={Message}
                  />
                  <Route name="home" path="/:color?" component={Message} />
                </Switch>
              );
            }}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
