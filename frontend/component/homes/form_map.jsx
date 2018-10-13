import HomeMap from './home_map';
import MarkerManager from '../../util/marker_manager';
import React from 'react';
import {withRouter} from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class FormMap extends HomeMap {
  constructor(props){
    super(props);
    this.marker = null;
  }

  componentDidMount(){
    this.createMap();
    this.registerListeners();
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers
  }

  registerListeners(){
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.props.handleFormClick(coords);

      if (this.marker != null){
        this.marker.setMap(null);
      }

      let position = new google.maps.LatLng(coords.lat, coords.lng);
      this.marker= new google.maps.Marker({
        position,
        map: this.map,
      });
    });
  }

  render() {
    return (
      <div id={'map-container'}
        ref={ map => this.mapNode = map}></div>
    )
  }
}

export default withRouter(FormMap);
