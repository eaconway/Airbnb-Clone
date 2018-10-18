import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestHomes } from '../../actions/home_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: state.entities.homes
});

const mapDispatchToProps = dispatch => ({
  requestHomes: (filters) => dispatch(requestHomes(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
