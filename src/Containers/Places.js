import React, { Component } from "react";
import firebase from "../firebase";

class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPlace = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("places").add({
      fullname: this.state.name,
      email: this.state.description
    });

    this.setState({
      fullname: "",
      email: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addPlace}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.updateInput}
          value={this.state.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.updateInput}
          value={this.state.description}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
