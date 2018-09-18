import React, { Component } from "react";
import Welcome from './Layout/Welcome'
import LoggedIn from './Layout/LoggedIn'
import Fire from './fire';

class App extends Component {
  state = {
    user: null
  }

  render() {
    return (
       this.state.user == null ? <Welcome /> : <LoggedIn />
    );
  }
}

export default App;