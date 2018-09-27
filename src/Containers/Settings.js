import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  version: {
    textAlign: "center",
    marginTop: 20
  }
});

class Settings extends React.Component {
  state = {
    checked: ["wifi"]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Push notifications" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle("push")}
                checked={this.state.checked.indexOf("push") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Help/FAQ" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Terms and conditions" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Partner" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Version 1.01"
              className={classes.version}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
