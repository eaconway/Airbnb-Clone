json.home do
  json.partial! 'home', home: @home
end

json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'api/bookings/booking', booking: booking
    end
  end
end
