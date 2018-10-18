export const findBookings = (bookings, homeId) => {
  if (bookings){
    return Object.values(bookings).map(booking => {
      if (booking.home_id == homeId) {
        return booking;
      }
    });
  }
};

export const findReviews = (reviews, homeId) => {
  if (reviews){
    debugger
    Object.keys(reviews).forEach(key => {
      if (reviews.key === undefined) {
        return [];
      }
    });

    return Object.values(reviews).map(review => {
      if (review.home_id == homeId) {
        return review;
      }
    });
  }
};
