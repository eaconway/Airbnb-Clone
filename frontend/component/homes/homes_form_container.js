import { connect } from 'react-redux';
import HomesForm from './homes_form';
import { createHome } from '../../actions/home_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createHome: (formData) => dispatch(createHome(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomesForm);
