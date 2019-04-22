import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import Loader from "./components/loader";
import Message from "./components/message";
import styled from "styled-components";

ReactGA.initialize('UA-65251724-3');
ReactGA.pageview(window.location.pathname + window.location.search);

//Loader
const Wrapper = styled.div`
  opacity: ${props => (props.visible ? "1" : "0")};
  transition: opacity .3s ease-in;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

function App() {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  });

  return (
    <div className="App">
      <Loader invisible={hasLoaded} />
      <Wrapper visible={hasLoaded}>
        <Router>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                  <Route name="home" path="/:message?" component={Message} />
                </Switch>
              );
            }}
          />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
