import React from "react";
import PropTypes from "prop-types";

export default class GMap extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.center["lat"] != 0 && nextProps.center["lng"] != 0) {
      this.loadMap(nextProps.center);
    }
  }

  loadMap(center) {
    this.map = new google.maps.Map(this.refs.map, {
      center: center,
      zoom: 15
    });

    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    });
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: "100%",
      border: "1px solid black"
    };

    return (
      <div>
        <div className="googleMap" ref="map" style={mapStyle}>
          Map is not available.
        </div>
      </div>
    );
  }
}

GMap.propTypes = {
  loadMap: PropTypes.func,
  center: PropTypes.object
};
