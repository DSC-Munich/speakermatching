import React from "react";
import Signup from "./container/Signup";
import Speaker from "./container/Speaker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/event">
            <p>Events</p>
          </Route>
          <Route path="/speaker/:speakerId">
            <Speaker />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
