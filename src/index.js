import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import L from "leaflet";
import { BrowserRouter } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
