import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import classNames from 'classnames';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

class Stamps extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    window.fetch('/api/places')
      .then(response => response.json())
      .then(json => this.setState({list: json}))
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {this.state.list.map((l, i) => (
            <ListItem button key={i}>
              <Avatar
                alt={l.name}
                src={l.avatar}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <ListItemText primary={l.name} secondary={l.description} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Stamps));
