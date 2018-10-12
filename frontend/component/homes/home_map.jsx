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
  }

  render() {
    return (
      <div id={'map-container'}
        ref={ map => this.mapNode = map}></div>
    )
  }
}

export default HomeMap;
