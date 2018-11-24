import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: { filter: 'hidden', clicked: ''},
      guests: { filter: 'hidden', clicked: ''},
    }
  }

  openOptions(key) {
    return () => {
      if(this.state[key].filter === 'hidden'){
        this.props.filterOn();
        this.setState({ [key]: { filter: '', clicked: 'clicked-green'} });
      } else {
        this.props.filterOn();
        this.setState({ [key]: { filter: 'hidden', clicked: ''} });
      }
    }
  }

  render() {
    return (
      <div className={'search-filters'}>

        <div className={'filter-btn ' + this.state.date.clicked} id='date-filter'
          onClick={this.openOptions('date')}>
          Date
        </div>

        <div className={'filter-btn ' + this.state.guests.clicked} id='guests-filter'
          onClick={this.openOptions('guests')}>
          Guests
          <div className={this.state.guests.filter + ' filter-modal'}>
            Test
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
