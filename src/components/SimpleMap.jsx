import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// eslint-disable-next-line react/prefer-stateless-function
class SimpleMap extends Component {
  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522,
    };

    return (
      <div className="map-container">
        <GoogleMapReact center={center} zoom={14}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
