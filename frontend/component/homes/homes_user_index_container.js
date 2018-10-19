import { connect } from 'react-redux';
import HomesUserIndex from './homes_user_index';
import {requestUserHomes, deleteHome} from '../../actions/home_actions';
import {userHomes} from '../../util/selectors';

const mapStateToProps = ({entities: {homes, hostings}, users, session: {id}}) => ({
  currentUser: users[id],
  homes: userHomes(homes, hostings)
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestUserHomes()),
  deleteHome: (id) => dispatch(deleteHome(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesUserIndex);

  // homes: userHomes(state.entities.homes, state.session.id, state.hostings)
