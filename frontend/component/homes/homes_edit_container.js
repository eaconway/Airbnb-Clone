import { connect } from 'react-redux';
import HomesEdit from './homes_edit';
import {updateHome, deleteHome, requestHome} from '../../actions/home_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users[state.session.id],
  home: state.entities.homes[ownProps.match.params.homeId]
});

const mapDispatchToProps = dispatch => ({
  updateHome: (formData) => dispatch(updateHome(formData)),
  deleteHome: (id) => dispatch(deleteHome(id)),
  requestHome: id => dispatch(requestHome(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesEdit);
