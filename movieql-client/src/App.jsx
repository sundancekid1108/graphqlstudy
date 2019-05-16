import React, {Component} from 'react';
import client from "./apolloClient";
import {ApolloProvider} from "react-apollo";
import { HashRouter as Router, Route} from "react-router-dom";
import Home from "./home";
import Detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        
          <Router>
            <main>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:movieId"} component={Detail} />
            </main>
          </Router>
        
      </ApolloProvider>
    );
  }
}


export default App;
