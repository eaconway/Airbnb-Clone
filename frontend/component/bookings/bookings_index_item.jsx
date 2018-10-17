import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  render () {
    return (
      <Link className={'bookings-index-item'} to={`/`}>
        <div className={'bookings-index-info'}>
          <h1>{this.props.home.city}</h1>
          <div>
            <span>{this.props.home.city}</span>
            <span>{this.props.booking.guests} guests</span>
          </div>

          <div className={'dates-traveling'}>
            <div className={'booking-arrival'}>
            </div>
            <div className={'booking-departure'}>
            </div>
          </div>

          <div className={'line-break'} />

          <div className='booking-options'>
            <div className='send-message'>
              <i className="far fa-comment"></i>
              Send Message
            </div>
            <div className='booking-update'>
              <i className="far fa-calendar-alt"></i>
              Change or Cancel Reservation
            </div>
            <div className='share-itinerary'>
              <i className="far fa-envelope"></i>
              Share Itinerary
            </div>
          </div>
        </div>
        <img src={'https://vignette.wikia.nocookie.net/onepiece/images/c/c9/Sweet_City.png/revision/latest?cb=20171001060543'}
          className={''}/>
      </Link>
    )
  }
};

export default BookingIndexItem;
