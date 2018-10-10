import { connect } from 'react-redux';
import ForgotPass from './forgot_pass';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  otherForm: (
    <button  onClick={() => dispatch(openModal('login'))}>
      Back to login
    </button>
  )
});

export default connect(null, mapDispatchToProps)(ForgotPass);
