import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

// eslint-disable-next-line react/prefer-stateless-function
class SimpleMap extends Component {
  render() {
    const { flats, selectedFlat } = this.props;
    const center = {
      lat: 48.8566,
      lng: 2.3522,
    };

    return (
      <div className="map-container">
        <GoogleMapReact center={center} zoom={13}>
          {flats.map((flat) => {
            return (
              <Marker
                key={flat.name}
                lat={flat.lat}
                lng={flat.lng}
                selected={flat === selectedFlat}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
