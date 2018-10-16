import { connect } from 'react-redux';
import HomesShow from './homes_show';
import { requestHome } from '../../actions/home_actions';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  home: state.entities.homes[ownProps.match.params.homeId]
});

const mapDispatchToProps = dispatch => ({
  requestHome: id => dispatch(requestHome(id)),
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesShow);
