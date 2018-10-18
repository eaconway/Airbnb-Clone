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

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
