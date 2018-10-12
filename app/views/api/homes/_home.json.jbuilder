json.extract! home, :id, :status, :lng, :lat, :beds, :baths,
  :bedrooms, :internet, :washer, :dryer, :guests, :home_type,
  :street_address, :city, :state, :zipcode
json.imageUrl url_for(home.image)
