import React from 'react';
import { withRouter } from 'react-router-dom';
import * as SessionFormUtil from '../../util/session_form_util';
import BirthdayDropdown from './birthday_dropdown';
import {months, days, years} from '../../util/birthday_dropdown';

class FormUser extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.state.months = months;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.state.password_type = 'password';
  }

  update(field){
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.birthday = `${this.state.year}-${this.state.months[this.state.month]}-${this.state.day}`;
    debugger;
    this.props.action(this.state).then(this.props.closeModal);
  }

  togglePassword(e){
    this.setState({password_type: 'text'});
  }

  render(){
    let mktgNotice = (<p className={'mktg-notice'}>We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>)
    let optInMktg = (<label className="container">I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message.
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>)

    let form = this.props.formType === 'Login' ? (
      <div>
        <h3 className={'form-header'}>Log in to continue</h3>
        <input className={'session-form-input'} type='text' placeholder='Email Address'
          value={this.state.email} onChange={this.update('email')}
          />{"\n"}

        <input className={'session-form-input'} type={this.state.password_type}
          placeholder='Password' value={this.state.password}
          onChange={this.update('password')}
          />{"\n"}

        <div className={'form-options-login'}>
          <button className={'show-pass'} onClick={this.togglePassword}>Show Password</button>
        </div>

        <input className={'form-submit'} type='submit'
          value='Log in'/>

        {this.props.forgetPass}

        <div className={'line-divider'}/>

        <div className={'switch-form'}> Dont have an account? {this.props.otherForm} </div>

      </div>
    ) : (
      <div>
        <h3 className={'form-header'}>Sign up below</h3>
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
          <button className={'show-pass'} onClick={this.togglePassword}>Show Password</button>
        </div>

        <h2 className={'birthday'}>Birthday</h2>
        <h4 className={'birthday-info'}>To sign up, you must be 18 or older. Other people won’t see your birthday.</h4>

        <div className={'birthday-form'}>
          <select value={this.state.month} onChange={this.update('month')}>
            <option selected>Month</option>
            {Object.keys(this.state.months).map(month =>
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

        {mktgNotice}
        <input className={'form-submit'} type='submit'
          value={this.props.formType}/>

        <div className={'switch-form'}> Already have an account? {this.props.otherForm} </div>

      </div>
    )
    return (
      <div className={'session'}>
        <button onClick={this.props.closeModal}
          className={'modal-close'}>X</button>

        <form onSubmit={this.handleSubmit}>
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
