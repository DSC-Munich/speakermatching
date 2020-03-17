import React from "react";
import { useState, useEffect } from "react";
import Signup from "./container/Signup";
import Organizer from "./container/Organizer";
import Speaker from "./container/Speaker";
import UpcomingEvents from "./container/UpcomingEvents";
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
          <Route path="/organizer/:organizerId">
            <Organizer />
          </Route>
          <Route path="/upcomingevents">
            <UpcomingEvents />
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
