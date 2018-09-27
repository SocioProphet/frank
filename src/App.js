import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Layout/Welcome";
import LoggedIn from "./Layout/LoggedIn";

class App extends Component {
  state = {
    user: 1
  };

  render() {
    return this.state.user == null ? (
      <Route to="/" exact component={Welcome} />
    ) : (
      <Route to="/app" exact component={LoggedIn} />
    );
  }
}

export default App;
