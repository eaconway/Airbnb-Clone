import { connect } from 'react-redux';
import HomesIndex from './homes_index';
import {requestUserHomes} from '../../actions/home_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes)
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestUserHomes())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesIndex);
