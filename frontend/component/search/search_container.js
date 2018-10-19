import { connect } from 'react-redux';
import SearchResults from './search_results';
import {requestHomes} from '../../actions/home_actions';
import {updateFilter} from '../../actions/filter_actions';
import {requestSearch} from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes),
  search: state.entities.searches[ownProps.match.params.searchId]
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(requestHomes()),
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  requestSearch: (id) => dispatch(requestSearch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
