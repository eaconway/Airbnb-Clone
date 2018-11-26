import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestHomes } from '../../actions/home_actions';
import { requestSearches, requestSearch,
  createSearch } from '../../actions/search_actions';
import { pickSearch } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes) || [],
  searches: Object.values(state.entities.searches) || [],
  search: state.entities.searches[ownProps.match.params.searchId] || {}
});

const mapDispatchToProps = dispatch => ({
  requestHomes: filters => dispatch(requestHomes(filters)),
  requestSearches: userId => dispatch(requestSearches(userId)),
  requestSearch: id => dispatch(requestSearch(id)),
  createSearch: search => dispatch(createSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
