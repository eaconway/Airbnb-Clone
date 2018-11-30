import { connect } from 'react-redux';
import Saved from './saved';
import {createLike, deleteLike} from '../../actions/saved_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id],
  homes: Object.values(state.entities.homes),
  likes: Object.values(state.entities.likes)
});

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
