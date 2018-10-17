import { connect } from 'react-redux';
import BookingsEdit from './bookings_edit';
import { requestBooking, updateBooking, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  booking: state.entities.bookings[ownProps.match.params.bookingId],
  homes: state.entities.homes
});

const mapDispatchToProps = dispatch => ({
  requestBooking: (id) => dispatch(requestBooking(id)),
  updateBooking: (booking) => dispatch(updateBooking(booking)),
  deleteBooking: (id) => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsEdit);
