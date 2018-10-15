import React, { Component, Fragment } from "react";
import firebase from "../firebase";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
    maxWidth: 300
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Places extends Component {
  state = {
    name: "",
    description: "",
    avatar: "",
    latitude: "",
    longitude: ""
  };

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
      name: this.state.name,
      description: this.state.description,
      avatar: this.state.avatar,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    });

    this.setState({
      name: "",
      description: "",
      latitude: "",
      longitude: "",
      avatar: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper>
          <Typography variant="h6" gutterBottom>
            Add new place
          </Typography>
          <form onSubmit={this.addPlace}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  className={classes.textField}
                  onChange={this.updateInput}
                  value={this.state.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  className={classes.textField}
                  onChange={this.updateInput}
                  value={this.state.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Avatar"
                  name="avatar"
                  className={classes.textField}
                  onChange={this.updateInput}
                  value={this.state.avatar}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Latitude"
                  name="latitude"
                  className={classes.textField}
                  onChange={this.updateInput}
                  value={this.state.latitude}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Longitude"
                  name="longitude"
                  className={classes.textField}
                  onChange={this.updateInput}
                  value={this.state.longitude}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                  onClick={this.addPlace}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Places);
