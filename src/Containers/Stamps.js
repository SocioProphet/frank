import React, { Component } from "react";
import firebase from "../firebase";

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

/*const list = [
  {
    id: 1,
    name: "Marhaba",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-3D-icon.png",
    subtitle: "Pięć pieczątek i tortilla za friko z sosem"
  },
  {
    id: 2,
    name: "Roti",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-Flowerpot-Grass-icon.png",
    subtitle: "Hot-dog szwedzki luj przy trzeciej pieczęci"
  },
  {
    id: 3,
    name: "AliBaba",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-Flower-2-icon.png",
    subtitle: "Wysmaruj się sosem i wygraj kebaba"
  },
  {
    id: 6,
    name: "Sphinx",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-Dropbox-icon.png",
    subtitle: "Dwie pieczątki za zakupy na bani"
  },
  {
    id: 7,
    name: "Mak",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-Finder-icon.png",
    subtitle: "Dzisięć pieczątek małe frytki bez keczupu"
  },
  {
    id: 8,
    name: "Radex",
    avatar_url:
      "https://icons.iconarchive.com/icons/raindropmemory/down-to-earth/128/G12-Calculator-icon.png",
    subtitle: "Brak aktualnych promocji oprócz czereśni"
  }
];*/

class Stamps extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    let list = []

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("places").onSnapshot((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
            list.push(doc.data()) 
        });

        this.setState({list: list})
        list = []
    })
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
