import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./home";
import Detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <main>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:parseInt(movieId)"} component={Detail} />
            </main>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;

//Movie ID 관련 에러