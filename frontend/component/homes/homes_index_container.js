import { connect } from 'react-redux';
import HomesIndex from './homes_index';
import {requestHomes} from '../../actions/home_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes)
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestHomes())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesIndex);
