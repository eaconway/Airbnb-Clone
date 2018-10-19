import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestHomes } from '../../actions/home_actions';
import { requestSearches, requestSearch,
  createSearch } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes) || [],
  searches: Object.values(state.entities.searches) || []
});

const mapDispatchToProps = dispatch => ({
  requestHomes: filters => dispatch(requestHomes(filters)),
  requestSearches: userId => dispatch(requestSearches(userId)),
  requestSearch: id => dispatch(requestSearch(id)),
  createSearch: search => dispatch(createSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
