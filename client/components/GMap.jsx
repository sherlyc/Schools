import React from 'react'

const defaultCenter = {
  lat: 48.858608,
  lng: 2.294471
};

export default class GMap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.loadMap(defaultCenter)
  }

  componentWillReceiveProps(nextProps) {
      this.loadMap(nextProps.center)
  }

  loadMap(center){
      this.map = new google.maps.Map(this.refs.map, {
        center: center,
        zoom: 17
      });

      this.marker = new google.maps.Marker({
         position: center,
         map: this.map
      });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}
