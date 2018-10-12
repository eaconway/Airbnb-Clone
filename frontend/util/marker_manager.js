export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(homes){
    const homesObj = {};

    homes.forEach(home => homesObj[home.id] = home);

    homes
      .filter(home => !this.markers[home.id])
      .forEach(newHome => this.createMarkerFromHome(newHome)); //, this.handleClick))

    Object.keys(this.markers)
      .filter(homeId => !homesObj[homeId])
      .forEach((homeId) => this.removeMarker(this.markers[homeId]));
  }

  createMarkerFromHome(home) {
    const position = new google.maps.LatLng(home.lat, home.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      homeId: home.id
    });

    // marker.addListener('click', () => this.handleClick(home));
    this.markers[marker.homeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.homeId].setMap(null);
    delete this.markers[marker.homeId];
  }
}
