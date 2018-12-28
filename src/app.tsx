import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import Loading from "./components/loading/loading";
import routes from "./route-config";

const App = () => (
  <Router>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((props, index) => (
            <Route key={index} {...props} />
          ))}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </Router>
);

export default App;
