import React from 'react';
import {merge} from 'lodash';

class Filters extends React.Component {
  constructor(props){
    super(props);

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
        value: [],
        entirePlace: false,
        privateRoom: false,
        sharedRoom: false,
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
    this.stop = this.stop.bind(this);
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

        if (key === 'homeType'){
          if (this.state[key].value.length === 0){
            x.clicked = '';
          }
        } else {
          if (this.state[key].value === this.stateDefault[key].value){
            x.clicked = '';
          }
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

  resetHomeTypeOptions(key){
    return (e) => {
      e.stopPropagation();
      let original = merge({}, this.stateDefault[key]);
      this.setState({
        [key]: original,
        containerBottom: '',
        activeFilter: null
      }, () => {
        this.props.updateFilter('home_type', this.state[key].value);
        this.props.filterOn();
      });
    }
  }

  handleHomeType(key){
    let homeTypes = {
      entirePlace: 'Entire Place',
      privateRoom: 'Private Room',
      sharedRoom: 'Shared Room'
    };

    return (e) => {
      e.stopPropagation();

      let homeType = this.state.homeType;

      if (homeType[key]){
        homeType[key] = false;
        homeType.value = homeType.value.filter(select => select != homeTypes[key])
      } else {
        homeType[key] = true;
        homeType.value.push(homeTypes[key]);
      }

      this.setState({ homeType}, () => this.props.updateFilter('home_type', homeType.value));
    }
  }

  stop(e){
    e.stopPropagation();
    console.log('stopped stopPropagation');
  }

  render() {
    let guestValue = this.state.guests.value;
    let guestsTitle = guestValue === 0 ? 'Guests' : (
      guestValue === 1 ? '1 guest' : guestValue + ' guests'
    );

    let homeTypeTitle = 'Home Type';

    return (
      <div className={'search-filters ' + this.state.containerBottom}>

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
            <div className='home-type-filter-div'>
              <div className='home-type-checkbox' onClick={this.stop}>
                <input name="entirePlace" type="checkbox" className='custom-checkbox'
                    checked={this.state.homeType.entirePlace}
                    onChange={this.handleHomeType('entirePlace')} />
              </div>
              <div className='choice'>
                <h3>Entire Place</h3>
                <h4>Have a place to yourself</h4>
              </div>
            </div>

            <div className='home-type-filter-div'>
              <div className='home-type-checkbox' onClick={this.stop}>
                <input name="privateRoom" type="checkbox" className='custom-checkbox'
                    checked={this.state.homeType.privateRoom}
                    onChange={this.handleHomeType('privateRoom')} />
              </div>
              <div className='choice'>
                <h3>Private Room</h3>
                <h4>Have your own room and share some common spaces</h4>
              </div>
            </div>

            <div className='home-type-filter-div'>
              <div className='home-type-checkbox' onClick={this.stop}>
                <input name="sharedRoom" type="checkbox" className='custom-checkbox'
                    checked={this.state.homeType.sharedRoom}
                    onChange={this.handleHomeType('sharedRoom')} />
              </div>
              <div className='choice'>
                <h3>Shared Room</h3>
                <h4>Stay in a shared space, like a common room</h4>
              </div>
            </div>

            <div className='filter-nav'>
              <button onClick={this.resetHomeTypeOptions('homeType')}>Cancel</button>
              <button onClick={this.openOptions('homeType')}>Apply</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Filters;
