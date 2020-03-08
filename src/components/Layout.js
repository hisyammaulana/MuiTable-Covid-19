import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import HomeMap from "./HomeMap";

function Layout() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={HomeMap} />
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;
