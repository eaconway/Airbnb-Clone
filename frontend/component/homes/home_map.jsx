import React from 'react';
import MarkerManager from '../../util/marker_manager';

class HomeMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 36.2048, lng: 138.2529 },
      zoom: 5
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateBounds('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  render() {
    return (
      <div id={'map-container'}
        ref={ map => this.mapNode = map}></div>
    )
  }
}

export default HomeMap;
