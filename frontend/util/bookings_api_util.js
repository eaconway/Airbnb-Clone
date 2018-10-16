export const fetchUserBookings = () => (
  $.ajax({
    url: `api/users/:user_id/bookings/guestBookings`,
    method: 'GET'
  })
);
