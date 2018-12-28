import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./route-config";

const App = () => (
  <Router>
    <Switch>
      {routes.map((props, index) => (
        <Route key={index} {...props} />
      ))}
    </Switch>
  </Router>
);

export default App;
