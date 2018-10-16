import { connect } from 'react-redux';
import FormUser from './form_user';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModalAndClearErrors, closeModalAndClearErrors } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const user = {username: '', password: ''};
  const formType = 'Login';

  return {
    user,
    formType,
    errors: state.errors.login
  }
};

const mapDispatchToProps = dispatch => ({
  action: (form) => dispatch(login(form)),
  otherForm: (
    <button  onClick={() => dispatch(openModalAndClearErrors('signup'))}>
      Signup
    </button>
  ),
  forgetPass: (
    <button className={'demo-button'}
      onClick={() => dispatch(openModalAndClearErrors('forgetPass'))}>
      Forgot Password?
    </button>
  ),
  closeModal: () => dispatch(closeModalAndClearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);

// errors: state.errors.session
