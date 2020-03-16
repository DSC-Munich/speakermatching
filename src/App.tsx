import React from "react";
import { useState, useEffect } from "react";
import Signup from "./container/Signup";
import Speaker from "./container/Speaker";
import db from "./services/speaker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    console.log(db.getEvents());
  }, []);

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
