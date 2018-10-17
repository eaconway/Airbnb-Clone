import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import range from 'lodash/range';

class BookingsEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestBooking(this.props.match.params.bookingId)
      .then(() => this.setState(this.props.booking))
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteBooking(this.props.match.params.bookingId)
      .then(() => this.props.history.push(`/users/${this.props.currentUser.id}/bookings`))
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.step < 2){
      this.setState({step: this.state.step + 1});
    } else {
      debugger
      this.props.updateBooking(this.state)
        .then(() => this.props.history.push(`/users/${this.props.currentUser.id}/bookings`))
    }
  }

  render () {

    if (this.props.booking === undefined || this.props.homes === undefined) {
      return (
        <div>
          Loading
        </div>
      )
    } else {
      let start = new moment(this.props.booking.start_date);
      let end = new moment(this.props.booking.end_date);
      let diff = new moment.duration(new Date(this.props.booking.end_date) - new Date(this.props.booking.start_date));
      let duration = Math.floor(diff.asDays());

      debugger

      let home = this.props.homes[this.props.booking.home_id];
      switch(this.state.step) {
        case 1:

          return (
            <div className={'bookings-edit-container'}>
              <div className={'bookings-edit-main'}>
                <div className='bookings-edit-header'>
                  <h3>{duration} nights in {home.city}</h3>
                </div>
                <span>{start.format("MMM Do, YYYY")} to {end.format("MMM Do, YYYY")} at <Link
                  to={`/homes/${home.id}`}>{home.title}</Link></span>

                <div className={'bookings-edit-options'}>
                  <div className={'bookings-edit-div'}>
                    <div>
                      <i className="fas fa-home icon"></i>
                      <h3>Change reservation</h3>
                      <p>Request to change your dates or number of guests</p>
                    </div>
                    <button className={'bookings-edit-button'}
                      onClick={this.handleSubmit}>Next</button>
                  </div>

                  <div className={'bookings-edit-div'}>
                    <div>
                      <i className="fas fa-ban icon"></i>
                      <h3>Cancel reservation</h3>
                      <p>Note* This will cancel your reservation immediately.</p>
                    </div>
                    <button className={'bookings-edit-delete'}
                      onClick={this.handleDelete}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
              <div className={'bookings-edit-container'}>
                <div className={'bookings-edit-main2'}>
                  <form className={'bookings-edit-content'} onSubmit={this.handleSubmit}>
                    <div className='bookings-edit-header'>
                      <h3>What do you want to change?</h3>
                    </div>

                    <h4>Dates</h4>
                    <div className={'dates-duration'}>
                      <input type='date' value={this.state.start_date}
                        onChange={this.update('start_date')}/>
                      <i className="fas fa-arrow-right icon"></i>
                      <input type='date' value={this.state.end_date}
                        onChange={this.update('end_date')}/>
                    </div>

                    <h4>Guests</h4>
                    <select value={this.state.guests} onChange={this.update('guests')}>
                      {range(1, home.guests + 1, 1).map(num =>
                        <option value={num} key={num}>{`${num} guests`}</option>
                      )}
                    </select>

                    <button className={'bookings-edit-submit'}
                      onClick={this.handleSubmit}>Update</button>
                  </form>

                  <div className='bookings-edit-info'>
                    <div className='home-info'>
                      <div>
                        <h3>{duration} nights in {home.city}</h3>
                        <span>{home.home_type} · {home.beds} beds</span>
                      </div>
                      <img src={home.imageUrl} />
                    </div>
                    <div className='line-divider'/>
                    <div className='guests'>
                      <i className="fas fa-user-friends"></i>
                      {this.props.booking.guests} guests
                    </div>
                    <div className='dates'>
                      <i className="far fa-calendar"></i>
                      {start.format("MMM Do, YYYY")}
                      <i className="fas fa-arrow-right small-icon"></i>
                      {end.format("MMM Do, YYYY")}
                    </div>

                    <div className='line-divider'/>
                    <div className='total'>
                      <span>Original Total</span>
                      <span>${home.price * duration}</span>
                    </div>
                  </div>
                </div>
              </div>
          );
      }
    }
  }
}

export default BookingsEdit;
