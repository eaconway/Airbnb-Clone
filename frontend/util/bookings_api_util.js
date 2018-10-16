export const fetchUserBookings = () => (
  $.ajax({
    url: `api/users/:user_id/bookings/userBookings`,
    method: 'GET'
  })
);

export const fetchBooking = (id) => (
  $.ajax({
    url: `api/bookings/${id}`,
    method: 'GET'
  })
);

export const createBooking = (booking) => (
  $.ajax({
    url: `api/bookings`,
    method: 'POST',
    data: {booking}
  })
);

export const updateBooking = (booking) => (
  $.ajax({
    url: `api/bookings/${booking.id}`,
    method: 'PATCH',
    data: {booking}
  })
);

export const deleteBooking = (id) => (
  $.ajax({
    url: `api/bookings/${id}`,
    method: 'DELETE'
  })
);
