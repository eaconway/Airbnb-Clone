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
    this.geocoder = new google.maps.Geocoder;
    this.infowindow = new google.maps.InfoWindow;
    this.registerListeners = this.registerListeners.bind(this);
  }

  componentDidMount(){
    this.createMap();
    this.registerListeners();
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers
  }

  //SAMPLE CODE TAKEN FROM: https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
  registerListeners(){
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      var latlng = {lat: coords.lat, lng: coords.lng};
      this.geocoder.geocode({'location': latlng}, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            // this.map.setZoom(11);
            if (this.marker != null){
              this.marker.setMap(null);
            }

            let position = new google.maps.LatLng(coords.lat, coords.lng);
            this.marker= new google.maps.Marker({
              position,
              map: this.map,
            });
            console.log(this.map);
            console.log(this.marker);
            console.log(this.geocoder);
            // console.log(this.map)
            debugger;
            this.infowindow.setContent(results[0].formatted_address);
            this.infowindow.open(this.map, this.marker);
            this.props.handleFormClick(coords, results[0].formatted_address);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
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
