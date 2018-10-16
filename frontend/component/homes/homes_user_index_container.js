import { connect } from 'react-redux';
import HomesUserIndex from './homes_user_index';
import {requestUserHomes, deleteHome} from '../../actions/home_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes)
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestUserHomes()),
  deleteHome: (id) => dispatch(deleteHome(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesUserIndex);
