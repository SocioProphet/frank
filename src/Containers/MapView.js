import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>{children}</Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: "none" }}>{items}</div>;
};

class MapView extends Component {
  state = {
    latlng: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 13,
    hasLocation: false
  };

  mapRef = createRef();

  componentDidMount = () => {
    this.mapRef.current.leafletElement.locate()
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    });
  };

  render() {
    const center = [this.state.latlng.lat, this.state.latlng.lng];

    const markers = [
      { key: "marker1", position: [this.state.latlng.lat, this.state.latlng.lng], children: "You are here!" },
    ];

    return (
      <Map
        center={center}
        zoom={this.state.zoom}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}

export default MapView;
