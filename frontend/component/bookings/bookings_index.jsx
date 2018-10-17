import React from 'react';
import BookingIndexItem from './bookings_index_item';
import { Link } from 'react-router-dom';

class BookingsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    this.props.requestUserBookings()
      .then(() => this.setState({loaded: true}))
  }

  render () {
    let bookings = (this.state.loaded) ? (
      this.props.bookings.map(booking => (
      <BookingIndexItem booking={booking}
        home={this.props.homes[booking.home_id]} />
    ))) : "";

    return (
      <div className={'bookings-index-container'}>
        <ul className={'bookings-index-list'}>
          {bookings}
        </ul>
      </div>
    )
  }
};

export default BookingsIndex;
