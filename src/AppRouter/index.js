import React from "react";
import { Route, Redirect, Router, Switch } from "react-router-dom";

import Home from "../components/Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/gbon-compliance" exact component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
