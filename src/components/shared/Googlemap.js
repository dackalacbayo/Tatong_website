import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
    <label className="col-form-label">
      <h1>
        <i className="fas red fa-map-marker-alt style-shadow" />
      </h1>
      {text}
    </label>
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 14.584114,
      lng: 121.062705
    },
    zoom: 11
  };

  render() {
    var { height } = this.props
    return (
      <div className="mt-5" style={{ height: (height), width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBpgAnwP6W1kwXhYmncsoEFOf7ixz77Nqo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={14.584114} lng={121.062705} text={""} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
