import React, {Component} from 'react';
import client from "./apolloClient";
import {apolloProvider} from "react-apollo";

class App extends Component{
  render() {
    return (
      <apolloProvider client = {client}>
        <div className="App"/>
      </apolloProvider>
    );
  }
}

export default App;
