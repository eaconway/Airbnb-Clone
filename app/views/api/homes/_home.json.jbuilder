json.extract! home, :id, :status, :lng, :lat, :beds, :baths,
  :bedrooms, :internet, :washer, :dryer, :guests, :description,
  :street_address, :city, :state, :zipcode, :title, :price, :updated_at, :home_type
json.imageUrl url_for(home.image)
json.fname home.owner.fname
json.profileUrl url_for(home.owner.profile_pic)
json.extraInfo home.extra_info
