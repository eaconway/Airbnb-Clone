import { connect } from 'react-redux';
import FormUser from './form_user';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const user = {username: '', password: ''};
  const formType = 'Login';

  return {
    user,
    formType,
  }
};

const mapDispatchToProps = dispatch => ({
  action: (form) => dispatch(login(form)),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);

// errors: state.errors.session
