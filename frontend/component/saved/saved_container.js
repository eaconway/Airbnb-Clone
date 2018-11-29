import { connect } from 'react-redux';
import Saved from './saved';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes),
  likes: Object.values(state.entities.likes)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
