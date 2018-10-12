import { connect } from 'react-redux';
import Search from './search';
import {requestHomes} from '../../actions/home_actions';
import {updateBounds} from '../../actions/filter_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes)
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestHomes()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
