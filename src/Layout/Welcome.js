import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Welcome = props => {
  return (
    <div className="text-center col-12">
      <img style={{ maxHeight: 300 }} src="Assets/frank.png" />
    </div>
  );
};

export default Welcome;
