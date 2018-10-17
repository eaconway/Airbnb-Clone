import { connect } from 'react-redux';
import HomesShow from './homes_show';
import { requestHome } from '../../actions/home_actions';
import { createBooking } from '../../actions/booking_actions';
import findBookings from '../../util/find_bookings';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  home: state.entities.homes[ownProps.match.params.homeId],
  allbookings: state.entities.bookings,
  bookings: findBookings(state.entities.bookings, ownProps.match.params.homeId),
  bookingErrors: state.errors.bookings
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  requestHome: id => dispatch(requestHome(id)),
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesShow);
