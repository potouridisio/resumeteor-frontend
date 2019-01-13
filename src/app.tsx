import ApolloClient from "apollo-boost";
import React, { Suspense } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import Loading from "./components/loading/loading";
import routes from "./route-config";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

const App = () => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
);

export default App;
