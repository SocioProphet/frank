import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

import MapView from "../Containers/MapView";
import Settings from "../Containers/Settings";
import Stamps from "../Containers/Stamps";
import Places from "../Containers/Places";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingBottom: 50
  },

  bottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: "500"
  }
});

class Layout extends Component {
  state = {
    value: 0
  };

  handleChange = (_, value) => {
    this.setState({ value: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <main>{this.props.children}</main>
        <Fragment>
          <Route exact path="/" component={MapView} />
          <Route path="/stamps" component={Stamps} />
          <Route path="/settings" component={Settings} />
          <Route path="/places" component={Places} />

          <BottomNavigation
            value={this.props.location.pathname}
            onChange={this.handleChange}
            showLabels
            className={classes.bottom}
          >
            <BottomNavigationAction
              component={Link}
              to="/stamps"
              value="/stamps"
              label="Stamps"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              component={Link}
              exact="true"
              to="/"
              value="/"
              label="Map"
              icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/settings"
              value="/settings"
              label="Settings"
              icon={<SettingsIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/places"
              value="/places"
              label="Places"
              icon={<FavoriteIcon />}
            />
          </BottomNavigation>
        </Fragment>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Layout));
