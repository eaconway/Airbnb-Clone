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

export const userHomes = (homes, userHostings) => {
  if (userHostings != undefined){
    let hostings = Object.values(userHostings);
    let hostingIds = hostings.map(hosting => hosting.home_id);
    return Object.values(homes).filter(home => hostingIds.includes(home.id))
  } else {
    return [];
  }
}

export const pickSearch = (searches, searchId) => {
  debugger;
  return {};
}
