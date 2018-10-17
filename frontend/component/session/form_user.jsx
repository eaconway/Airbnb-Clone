import React from 'react';
import { withRouter } from 'react-router-dom';
// import * as SessionFormUtil from '../../util/session_form_util';
import {months, days, years} from '../../util/birthday_dropdown';

class FormUser extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.state.password_type = 'password';
    this.state.togglePassTitle = 'Show Password';
  }

  update(field){
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.birthday = `${this.state.year}-${months[this.state.month]}-${this.state.day}`;
    this.props.action(this.state).then(this.props.closeModal);
  }

  demoLogin(e){
    e.preventDefault();
    let demoForm = {
      email: 'demo@demo.com',
      password: 'password'
    }
    this.props.action(demoForm).then(this.props.closeModal);
  }

  togglePassword(e){
    e.preventDefault();

    if (this.state.password_type === 'password') {
      this.setState({password_type: 'text', togglePassTitle: 'Hide Password'});
    } else {
      this.setState({password_type: 'password', togglePassTitle: 'Show Password'});
    }
  }

  render(){

    let mktgNotice = (<p className={'mktg-notice'}>We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>)
    let optInMktg = (<label className="container">I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message.
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>)
    let demo = (
      <button className={'demo-button'} onClick={this.demoLogin}>
        Demo
      </button>
    )
    let errors = (this.props.errors ? this.props.errors.map(error => <li>{error}</li>) : "" )

    let passwordToggle = <a className={'show-pass'} onClick={this.togglePassword}>{this.state.togglePassTitle}</a>

    let form = this.props.formType === 'Login' ? (
      <div>
        <h3 className={'form-header'}>Log in to continue</h3>
        <ul className={'session-errors'}>{errors}</ul>
        <input className={'session-form-input'} type='text' placeholder='Email Address'
          value={this.state.email} onChange={this.update('email')}
          />{"\n"}

        <input className={'session-form-input'} type={this.state.password_type}
          placeholder='Password' value={this.state.password}
          onChange={this.update('password')}
          />{"\n"}

        <div className={'form-options-login'}>
          {passwordToggle}
        </div>

        <input className={'form-submit'} type='submit'
          value='Log in'/>

        <div className={'demo-pass'} onClick={this.demoLogin}>
          Demo
        </div>

        <div className={'line-divider'}/>

        <div className={'switch-form'}> Dont have an account? {this.props.otherForm} </div>

      </div>
    ) : (
      <div>
        <h3 className={'form-header'}>Sign up below</h3>
        <ul className={'session-errors'}>{errors}</ul>
        <input className={'session-form-input'} type='text' placeholder='Email Address'
          value={this.state.email} onChange={this.update('email')}
          />{"\n"}

        <input className={'session-form-input'} type='text' placeholder='First Name'
          value={this.state.fname} onChange={this.update('fname')}
          />{"\n"}

        <input className={'session-form-input'} type='text' placeholder='Last Name'
          value={this.state.lname} onChange={this.update('lname')}
          />{"\n"}

        <input className={'session-form-input'} type={this.state.password_type}
          placeholder='Password' value={this.state.password}
          onChange={this.update('password')}
          />{"\n"}

        <div className={'form-options-login'}>
          {passwordToggle}
        </div>

        <h2 className={'birthday'}>Birthday</h2>
        <h4 className={'birthday-info'}>To sign up, you must be 18 or older. Other people won’t see your birthday.</h4>

        <div className={'birthday-form'}>
          <select value={this.state.month} onChange={this.update('month')}>
            <option selected>Month</option>
            {Object.keys(months).map(month =>
              <option value={month}>{month}</option>
            )}
          </select>
          <select value={this.state.day} onChange={this.update('day')}>
            <option selected>Day</option>
            {days.map(day =>
              <option value={day}>{day}</option>
            )}
          </select>
          <select value={this.state.year} onChange={this.update('year')}>
            <option selected>Year</option>
            {years.map(year =>
              <option value={year}>{year}</option>
            )}
          </select>
        </div>

        <input className={'form-submit'} type='submit'
          value={this.props.formType}/>

        <div className={'switch-form'}> Already have an account? {this.props.otherForm} </div>

      </div>
    )
    return (
      <div className={'session'}>
        <button onClick={this.props.closeModal}
          className={'modal-close'}>X</button>
        <form className={'session-form'} onSubmit={this.handleSubmit}>
          {form}
        </form>
      </div>
    )
  }
}

export default withRouter(FormUser);

// <div onClick={() => this.props.openModal({otherForm})}
//    className={'nav-link'}>Login</div>

// <label className="container"> Remember Me
//   <input type="checkbox" />
//   <span className="checkmark"></span>
// </label>
