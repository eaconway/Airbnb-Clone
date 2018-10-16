json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end

json.homes do
  @homes.each do |home|
    json.set! home.id do
      json.partial! 'api/homes/home', home: home
    end
  end
end
