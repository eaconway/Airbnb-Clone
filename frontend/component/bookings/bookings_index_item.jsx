import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  render () {
    debugger
    return (
      <div className={'bookings-index-item'} to={`/`}>
        <div className={'bookings-index-info'}>
          <h1>{this.props.home.city}Konoha</h1>
          <div className={'bookings-index-sub-header'}>
            <Link to={`/homes/${this.props.home.id}`}>
              {this.props.home.title}</Link>
            <span>{this.props.booking.guests} guests</span>
          </div>

          <div className={'dates-traveling'}>
            <div className={'booking-arrival'}>
            </div>
            <i className="fas fa-angle-right"></i>
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
      </div>
    )
  }
};

export default BookingIndexItem;
