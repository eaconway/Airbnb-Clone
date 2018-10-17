json.booking do
  json.partial! 'booking', booking: @booking
end

json.home do
  json.partial! 'api/homes/home', home: @home
end
