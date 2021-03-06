import React from 'react';
import { closeModalAndClearErrors } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_container';
import SignupFormContainer from './signup_container';
import ForgotPassContainer from './forgot_pass_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'forgetPass':
      component = <ForgotPassContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModalAndClearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
