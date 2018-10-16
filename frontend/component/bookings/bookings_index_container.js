import { connect } from 'react-redux';
import BookingsIndex from './bookings_index';
import { requestUserBookings } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes),
  bookings: Object.values(state.entities.bookings)
});

const mapDispatchToProps = dispatch => ({
  requestUserBookings: () => dispatch(requestUserBookings())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsIndex);
