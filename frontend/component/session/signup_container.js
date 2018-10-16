import { connect } from 'react-redux';
import FormUser from './form_user';
import { signup } from '../../actions/session_actions';
import React from 'react';
import { openModalAndClearErrors, closeModalAndClearErrors} from '../../actions/modal_actions';

const mapStateToProps = state => {
  const user = {email: '', fname: '', lname: '', password: '', month: '', day: '', year:''};
  const formType = 'Sign Up';

  return {user, formType, errors: state.errors.login}
};

const mapDispatchToProps = dispatch => ({
  action: (form) => dispatch(signup(form)),
  otherForm: (
      <button onClick={() => dispatch(openModalAndClearErrors('login'))}>
        Login
      </button>
    ),
  closeModal: () => dispatch(closeModalAndClearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
