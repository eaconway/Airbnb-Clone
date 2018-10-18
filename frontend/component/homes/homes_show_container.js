import { connect } from 'react-redux';
import HomesShow from './homes_show';
import { requestHome } from '../../actions/home_actions';
import { createBooking } from '../../actions/booking_actions';
import { createReview, deleteReview } from '../../actions/review_actions';
import { findBookings, findReviews} from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id] || 0,
  home: state.entities.homes[ownProps.match.params.homeId],
  bookings: findBookings(state.entities.bookings, ownProps.match.params.homeId),
  bookingErrors: state.errors.bookings,
  reviews: findReviews(state.entities.reviews, ownProps.match.params.homeId),
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  requestHome: id => dispatch(requestHome(id)),
  createBooking: booking => dispatch(createBooking(booking)),
  createReview: review => dispatch(createReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesShow);
