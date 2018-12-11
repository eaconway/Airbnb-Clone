# README

Hi! Welcome to AirbnAnime! This is a site where you can book anime homes/locations for your Otaku-filled vacations with your friends. You can book trips, create homes, leave reviews, and search based on different criteria. More features incoming! 

[AirbnAnime](https://airbnanime.herokuapp.com)

![](https://giphy.com/gifs/cPxRDvlSj9QKA/html5)

# Setup
- ```git clone the repo```
- ```bundle install``` to install gemfiles
- ```npm install``` to install npm packages
- ```bundle exec rails db:setup``` to create, seed, and migrate database
- ```npm run start``` to start your webpack
The project should then be available at the address localhost:3000 in your browser

# Technologies Used
- FrontEnd: ```JavaScript (React, Redux, AJAX, Jquery, Vanilla DOM), HTML, CSS```
- BackEnd: ```Ruby on Rails```
- Database: ```PostgreSQL```

# Awesome Features
## Google Maps Integration
- Feature: Airbnanime implements a mapping feature that does a few things.
  - When searching, the map both:
    1. Shows all homes that are being displayed on the map
    2. Filters homes displayed based on the view window of the map
    
    ``` js
    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds);
      });

      google.maps.event.addListener(this.map, 'click', (event) => {
        const coords = getCoordsObj(event.latLng);
        this.handleClick(coords);
      });
    }
    ```
    
    ``` js
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
      ```

  - When created a home, you can choose your location directly on the map (clicking on map for lat/lng)
  - When updating/editing a home, displays current location and allows for updating through map directly

## Search Functionality 
- Feature: You can search for homes based on city, with an auto updating recommendations below, based on your potential query
  - Filters: you can filter by bounds (based on map), beds, guests, bedrooms, etc

## Bookings
- Feature: You can book locations at different Airbnb's, even starting on the same day that someone else completes their stay.
  - You can't pick a start time that's after your end time, or vise versa
  - You can't book a time in the past
  - You can't book over other's stays
  
 
