import React from 'react';
import { Link } from 'react-router-dom';
import {cities, guests, types} from '../../util/homes_util';

const FIELDS = {
  city: cities,
  guests: guests,
  type: types
}

// debugger;
class Homes extends React.Component {
  constructor(props){
    super(props);
    this.state={
      step: 1,
      city: 'Konoha',
      guests: 1,
      type:'Entire Place'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  update(field){
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.step === 1) {
      debugger
      this.setState({step: 2});
    } else {
      console.log('hi');
    }
  }

  formInputCreator(field, seed){
    debugger
    return (
      <select className={''} value={this.state[field]} onChange={this.update(field)}>
      {seed.map((opt,idx) =>
        <option value={opt}
          key={idx}
          selected = {this.state[field] === opt ? true : false }>
          {opt}
        </option>
      )}
    </select>)
  }

  capitalize(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render(){
    switch(this.state.step) {

      case 1:
        return (
          <div className={'jumbo'}>
            <div className={'jumbo-main'}>

              <div className={'welcome'}>
                <div className={'welcome-header'}>
                  <h3>HOST ON AIRBNB</h3>
                  <h1>Earn money as an Airbnb host</h1>
                </div>

                <form className={'home-form-start session-form'} onSubmit={this.handleSubmit}>
                  <h2>Find out what you could earn</h2>

                  {this.formInputCreator('city', cities)}

                  <select value={this.state.guests} onChange={this.update('guests')}>
                    {guests.map(num =>
                      <option value={num} key={num}>{`${num} guests`}</option>
                    )}
                  </select>

                  {this.formInputCreator('type', types)}

                  <h1>$$$$</h1>
                  <p>monthly potential</p>

                  <input type='submit' value='Get Started' className={'form-submit'} />
                </form>
              </div>

              <div className={'welcome-callouts'}>
                <div>
                  <h1>Why host on Airbnb?</h1>
                  <p>No matter what kind of home or room you have to share,
                    Airbnb makes it simple and secure to earn money and reach millions
                    of travelers looking for unique places to stay, just like yours.</p>
                </div>
                <div>
                  <h1>You’re in control</h1>
                  <p>With Airbnb, you’re in full control of your availability,
                     prices, house rules, and how you interact with guests.
                     You can set check-in times and handle the process however you like.</p>
                </div>
                <div>
                  <h1>We’re there at every step</h1>
                  <p>Airbnb offers tools, hospitality tips, 24/7 support,
                    and an online community of experienced hosts for questions
                    and sharing ideas for success.</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className={'form-container'}>
            <div className={'home-form'}>
              <h1>Hi, {this.props.currentUser.fname}!
                Let’s get started listing your space.</h1>
              <div>
                <h4>Step 1</h4>
                <h2>What kind of place do you have?</h2>
                <div className={'current-options'}>
                  {Object.keys(this.state).map((field, idx) => {
                    if (field != 'step' && this.state[field] != '' && idx <= 3){
                      debugger
                      return (
                        <label className={'chosen-fields'}>{this.capitalize(field)}
                          {this.formInputCreator(field, FIELDS[field])}
                        </label>
                      )
                    }
                  })}
                </div>
              </div>

              <form onSubmit={this.handleSubmit}>
                <div>
                  <h4>Step 2</h4>
                  <h2>Now, let's talk the details</h2>
                </div>

                
              </form>
            </div>

            <div className={'form-image'}>
              <h1>second step</h1>
            </div>
          </div>
        )
    }
  }
}

export default Homes;
