import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: { filter: 'hidden', clicked: ''},
      guests: {
        filter: 'hidden',
        clicked: '',
        value: 0,
        adults: 0,
        children: 0,
        infants: 0,
      },
      containerBottom: ''
    }
  }

  openOptions(key) {
    return () => {
      if(this.state[key].filter === 'hidden'){
        this.props.filterOn();
        let x = this.state[key];
        x.filter = '';
        x.clicked = 'clicked-green';
        this.setState({
          [key]: x,
          containerBottom: 'no-bottom-border'
        });
      } else {
        this.props.filterOn();
        let x = this.state[key];
        x.filter = 'hidden';
        x.clicked = '';
        this.setState({
          [key]: x,
          containerBottom: ''
        });
      }
    }
  }

  handleGuest(key, type){
    return (e) => {
      e.stopPropagation();
      let guests = this.state.guests;
      let value = guests.value;
      let category = guests[type];
      // debugger
      if (key === 'down' && category > 0){
        guests.value -= 1;
        guests[type] -= 1
        this.setState({ guests });
      } else if (key === 'up'){
        guests.value += 1;
        guests[type] += 1
        this.setState({ guests });
      }

      // let total = guests.adults + guests.childen + guests.infants;
      // let total = [guests.adults, guests.childen, guests.infants].reduce((acc, el) => acc += el);
      // debugger
      this.props.updateFilter('guests', value);
    }
  }

  render() {
    let guestValue = this.state.guests.value;
    let guestsTitle = guestValue === 0 ? 'Guests' : ('hi');
    //   if (guestValue === 1){
    //     return '1 guest';
    //   } else { return guestValue  + ' guest'; }
    // );

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
          </div>
        </div>
        <div className='filter-btn'>Home Type</div>
        <div className='filter-btn'>Price</div>
        <div className='filter-btn'>More Filters</div>
      </div>
    )
  }
}

export default Filters;
