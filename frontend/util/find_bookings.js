export default (bookings, homeId) => {
  debugger
  return Object.values(bookings).map(booking => {
    if (booking.home_id == homeId) {
      return booking;
    }
  })
};
