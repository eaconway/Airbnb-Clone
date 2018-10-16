import React from 'react';
import BookingIndexItem from './bookings_index_item';
import { Link } from 'react-router-dom';

class BookingsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestUserBookings()
  }

  render () {
    let bookings = (this.props.bookings != undefined && this.props.homes != undefined ) ? (
      this.props.bookings.map(booking => (
      <BookingIndexItem booking={booking}
        home={this.props.homes[booking.home_id]} />
    ))) : '';

    debugger

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
