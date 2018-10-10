import { connect } from 'react-redux';
import FormUser from './form_user';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  const user = {username: '', email: '', password: ''};
  const formType = 'Sign Up';

  return {user, formType}
};

const mapDispatchToProps = dispatch => ({
  action: (form) => dispatch(signup(form)),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
