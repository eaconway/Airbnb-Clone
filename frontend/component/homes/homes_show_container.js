import { connect } from 'react-redux';
import HomesShow from './homes_show';
import { requestHome } from '../../actions/home_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.users[state.session.id],
  home: state.entities.homes[ownProps.match.params.homeId]
  }
};

const mapDispatchToProps = dispatch => ({
  requestHome: id => dispatch(requestHome(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesShow);
