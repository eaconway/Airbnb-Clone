import React from 'react';
import { withRouter } from 'react-router-dom';

class FormUser extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render(){
    let fields = Object.keys(this.state).map((field,idx) =>
      <label key={idx}>
        <input
          className={'session-form-input'}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={[field]}
          value={this.state[field]}
          onChange={this.update(field)}
          />{"\n"}
      </label>
    );

    let mktgNotice = (<p className={'mktg-notice'}>We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>)
    let optInMktg = (<label class="container">I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message.
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>)
    let otherForm = this.props.formType === 'Login' ? 'signup' : 'login';

    return (
      <div className={'session'}>
        <h3 className={'form-header'}>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          {fields}
          {mktgNotice}
          <input
            className={'form-submit'}
            type='submit'
            value={this.props.formType}/>
          {optInMktg}
        </form>
        <div onClick={() => this.props.openModal({otherForm})}
           className={'nav-link'}>Login</div>
      </div>
    )
  }
}

export default withRouter(FormUser);
