import React from 'react';

export default (props) => (
  <div className={'session'}>
    <button onClick={props.closeModal}
      className={'modal-close'}>X</button>
    <h3 className={'form-header'}>Forgot Password?</h3>
    {props.otherForm}
  </div>
)
