import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class BookingIndexItem extends React.Component {
  render () {
    let start = new moment(this.props.booking.start_date).format("MMM Do, YYYY");
    let end = new moment(this.props.booking.end_date).format("MMM Do, YYYY");
    return (
      <div className={'bookings-index-item'} to={`/`}>
        <div className={'bookings-index-info'}>
          <h1>{this.props.home.city}</h1>
          <div className={'bookings-index-sub-header'}>
            <Link to={`/homes/${this.props.home.id}`}>
              {this.props.home.title}</Link>
            <span>{this.props.booking.guests} guests</span>
          </div>

          <div className={'dates-traveling'}>
            <div className={'booking-arrival date'}>
              <div className={'date-header'}>{start}</div>
              <div className={'date-sub-header'}>CHECK IN 3:00PM</div>
            </div>

            <i className="fas fa-angle-right"></i>

            <div className={'booking-departure date'}>
              <div className={'date-header'}>{end}</div>
              <div className={'date-sub-header'}>CHECK OUT 12:00PM</div>
            </div>
          </div>

          <div className={'line-break'} />

          <div className='booking-options'>
            <div className='send-message'>
              <i className="far fa-comment"></i>
              <Link to={'/workInProgress'}
                >Send Message</Link>
            </div>
            <div className='booking-update'>
              <i className="far fa-calendar-alt"></i>
              <Link to={`/bookings/${this.props.booking.id}/edit`} >Change or Cancel</Link>
            </div>
            <div className='share-itinerary'>
              <i className="far fa-envelope"></i>
              <Link to={'/workInProgress'}
                >Share Itinerary</Link>
            </div>
          </div>
        </div>
        <img src={this.props.home.imageUrl}
          className={''}/>
      </div>
    )
  }
};

export default BookingIndexItem;
