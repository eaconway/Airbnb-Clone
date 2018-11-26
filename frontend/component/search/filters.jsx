import React from 'react';
import {merge} from 'lodash';

class Filters extends React.Component {
  constructor(props){
    super(props)
    this.stateDefault = {
      date: { filter: 'hidden', clicked: ''},
      guests: {
        filter: 'hidden',
        clicked: '',
        value: 0,
        adults: 0,
        children: 0,
        infants: 0,
      },
      homeType: {
        filter: 'hidden',
        clicked: '',
        value: []
      },
      containerBottom: '',
      activeFilter: null
    }
    this.state = this.stateDefault;
    this.state = merge({}, this.stateDefault);

    this.handleGuest = this.handleGuest.bind(this);
    this.openOptions = this.openOptions.bind(this);
    this.resetOptions = this.resetOptions.bind(this);
    this.handleHomeType = this.handleHomeType.bind(this);
  }

  openOptions(key) {
    return (e) => {
      e.stopPropagation();
      if(this.state[key].filter === 'hidden'){
        this.props.filterOn();
        let x = this.state[key];
        x.filter = '';
        x.clicked = 'clicked-green';
        this.setState({
          [key]: x,
          containerBottom: 'no-bottom-border',
          activeFilter: key
        });

      } else {
        let x = this.state[key];
        x.filter = 'hidden';

        if (this.state[key].value === this.stateDefault[key].value){
          x.clicked = '';
        }

        this.setState({
          [key]: x,
          containerBottom: '',
          activeFilter: null
        }, this.props.filterOn);

      }
    }
  }

  resetOptions(key){
    return (e) => {
      e.stopPropagation();
      let original = merge({}, this.stateDefault[key]);
      this.setState({
        [key]: original,
        containerBottom: '',
        activeFilter: null
      }, () => {
        this.props.updateFilter(key, this.state[key].value);
        this.props.filterOn();
      });
    }
  }

  handleGuest(key, type){
    return (e) => {
      e.stopPropagation();
      let guests = this.state.guests;
      let category = guests[type];
      let value = guests.value;
      // debugger
      if (key === 'down' && category > 0){
        guests.value -= 1;
        guests[type] -= 1
        this.setState({ guests }, ()=> this.props.updateFilter('guests', guests.value));
      } else if (key === 'up'){
        guests.value += 1;
        guests[type] += 1
        // debugger;
        this.setState({ guests }, ()=> this.props.updateFilter('guests', guests.value));
      }
    }
  }

  handleHomeType(){

  }

  render() {
    let guestValue = this.state.guests.value;
    let guestsTitle = guestValue === 0 ? 'Guests' : (
      guestValue === 1 ? '1 guest' : guestValue + ' guests'
    );

    let homeTypeValue = 'Home Type';

    return (
      <div className={'search-filters ' + this.state.containerBottom}>

        <div className={'filter-btn ' + this.state.date.clicked} id='date-filter'
          onClick={this.openOptions('date')}>
          Date
        </div>

        <div className={'filter-btn ' + this.state.guests.clicked} id='guests-filter'
          onClick={this.openOptions('guests')}>
          {guestsTitle}
          <div className={this.state.guests.filter + ' filter-modal'}>
            <div className='guest-filter-div'>
              Adults
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleGuest('down', 'adults')}>-</div>
                <div>{this.state.guests.adults} + </div>
                <div className='filter-button' onClick={this.handleGuest('up', 'adults')}>+</div>
              </div>
            </div>

            <div className='guest-filter-div'>
              Children
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleGuest('down', 'children')}>-</div>
                <div>{this.state.guests.children} + </div>
                <div className='filter-button' onClick={this.handleGuest('up', 'children')}>+</div>
              </div>
            </div>

            <div className='guest-filter-div'>
              Infants
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleGuest('down', 'infants')}>-</div>
                <div>{this.state.guests.infants} + </div>
                <div className='filter-button' onClick={this.handleGuest('up', 'infants')}>+</div>
              </div>
            </div>

            <div className='filter-nav'>
              <button onClick={this.resetOptions('guests')}>Cancel</button>
              <button onClick={this.openOptions('guests')}>Apply</button>
            </div>
          </div>
        </div>


        <div className={'filter-btn ' + this.state.homeType.clicked} id='home-type-filter'
          onClick={this.openOptions('homeType')}>
          {homeTypeTitle}
          <div className={this.state.homeType.filter + ' filter-modal'}>
            <div className='guest-filter-div'>
              Adults
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleHomeType()}>-</div>
                <div>{this.state.guests.adults} + </div>
                <div className='filter-button' onClick={this.handleHomeType()}>+</div>
              </div>
            </div>

            <div className='guest-filter-div'>
              Children
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleGuest('down', 'children')}>-</div>
                <div>{this.state.guests.children} + </div>
                <div className='filter-button' onClick={this.handleGuest('up', 'children')}>+</div>
              </div>
            </div>

            <div className='guest-filter-div'>
              Infants
              <div className='guest-filter-menu'>
                <div className='filter-button' onClick={this.handleGuest('down', 'infants')}>-</div>
                <div>{this.state.guests.infants} + </div>
                <div className='filter-button' onClick={this.handleGuest('up', 'infants')}>+</div>
              </div>
            </div>

            <div className='filter-nav'>
              <button onClick={this.resetOptions('homeType')}>Cancel</button>
              <button onClick={this.openOptions('homeType')}>Apply</button>
            </div>
          </div>
        </div>
        <div className='filter-btn'>Price</div>
        <div className='filter-btn'>More Filters</div>
      </div>
    )
  }
}

export default Filters;
