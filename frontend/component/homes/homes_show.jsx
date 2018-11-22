import React from 'react';
import range from 'lodash/range';
import Calendar from './calendar_dates';
import moment from 'moment';
import ReviewListItem from '../reviews/review_list_item';
import Loading from '../loading';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

class HomeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guests: 1,
      startDate: null,
      endDate: null,
      enteredTo: null,
      homeId: '',
      hide: 'hidden',
      loaded: false,
      rating: 0,
      body: '',
      author_id: this.props.currentUser.id
    }
    this.toggleHide = this.toggleHide.bind(this);
    this.timeSinceUpdate = this.timeSinceUpdate.bind(this);
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);

    // this.handleDayClick = this.handleDayClick.bind(this);
    // this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    // this.handleResetClick = this.handleResetClick.bind(this);
    this.validateDateRange = this.validateDateRange.bind(this);
  }

  componentDidMount(){
    this.props.clearBookingErrors();
    this.props.requestHome(this.props.match.params.homeId)
      .then(() => this.setState({homeId: this.props.home.id, loaded: true, home_id: this.props.home.id}))
  }

  update(field){
    return e => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      return this.setState({[field]: value})
    }
  }

  toggleHide(e){
    if (this.state.hide === 'hidden'){
      return this.setState({hide: ''});
    }
    return this.setState({hide: 'hidden'});
  }

  timeSinceUpdate(){
    let oldDate = new Date(this.props.home.updated_at);
    let newDate = new Date();
    var diff = new moment.duration(newDate - oldDate);
    return Math.floor(diff.asDays());
  }

  handleBookingSubmit(e){
    e.preventDefault();

    this.props.createBooking(this.state)
      .then(() => this.props.history.push(`/users/${this.props.currentUser.id}/bookings`));
  }

  handleReviewSubmit(e){
    e.preventDefault();

    this.props.createReview(this.state);
  }

  // CALENDAR METHODS
  showFromMonth() {
    // const { from, to } = this.state;
    const from = this.state.startDate;
    const to = this.state.endDate;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ startDate: from });
  }

  handleToChange(to) {
    this.setState({ endDate:to }, this.showFromMonth);
  }

  // getInitialState() {
  //   return {
  //     startDate: null,
  //     endDate: null,
  //     enteredTo: null, // Keep track of the last day for mouseEnter.
  //   };
  // }
  //
  // isSelectingFirstDay(from, to, day) {
  //   const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  //   const isRangeSelected = from && to;
  //   return !from || isBeforeFirstDay || isRangeSelected;
  // }
  //
  // handleDayClick(day) {
  //   // const { from, to } = this.state;
  //   const from = this.state.startDate;
  //   const to = this.state.endDate;
  //   console.log('day click');
  //   this.to.getInput().focus()
  //   // if (from && to && day >= from && day <= to) {
  //   if (from && to){
  //     this.handleResetClick();
  //     return;
  //   }
  //   if (this.isSelectingFirstDay(from, to, day)) {
  //     this.setState({
  //       startDate: day,
  //       endDate: null,
  //       enteredTo: null,
  //     });
  //   } else {
  //     // validate that the date is a reasonable day
  //     this.setState({
  //       endDate: day,
  //       enteredTo: day,
  //     });
  //   }
  // }
  // handleDayMouseEnter(day) {
  //   // const { from, to } = this.state;
  //   console.log('day mouse enter');
  //   const from = this.state.startDate;
  //   const to = this.state.endDate;
  //   if (!this.isSelectingFirstDay(from, to, day)) {
  //     this.setState({
  //       enteredTo: day,
  //     });
  //   }
  // }
  // handleResetClick() {
  //   console.log('reset click');
  //   this.setState(this.getInitialState());
  // }

  validateDateRange(){
    debugger;
  }

  render() {
    let amenities = ['internet', 'washer', 'dryer'];
    let amenitiesIcons = {
      internet: <i className="fas fa-wifi homes-icon"></i>,
      washer: <img className={'homes-icon'} src={'https://image.flaticon.com/icons/svg/1104/1104590.svg'} />,
      dryer: <img className={'homes-icon'} src={'https://image.flaticon.com/icons/svg/35/35098.svg'} />,
    }

    let amenitiesFill =  this.props.home === undefined ? "" : (amenities.map((amenity, idx) => {
      if (this.props.home[amenity]){
        return (
          <div className={'homes-profile-amenities-item'}>
            {amenitiesIcons[amenity]} {amenity}
          </div>
        );
      }
    }));

    let reviews = this.props.reviews.length === 0 ? "" : (
      this.props.reviews.filter(review => review != undefined).map((review, idx) => {
        if (review != undefined) {
          return <ReviewListItem review={review} key={idx}
            currentUserId={this.props.currentUser.id} deleteReview={this.props.deleteReview}/>
        }
      })
    );

    if (this.state.loaded === true) {
      let disabledBookings = this.props.bookings.length === 0 ? [] : (
      this.props.bookings.map(booking => {
        let start = new Date(booking.start_date);
        let end = new Date(booking.end_date);
        end.setDate(end.getDate() + 1);
        return {after: start, before: end }
      }));
      disabledBookings.push({before: new Date()});

      let bookingErrors = this.props.bookingErrors ? (
        <ul>
          {this.props.bookingErrors.map(error => <li>{error}</li>)}
        </ul>
      ) : "";
      let overallRating = '';

      if (this.props.reviews.length > 0) {
        let sumRating = 0;
        reviews.forEach(review => sumRating += review.rating);
        let overallRating = sumRating/reviews.length;
      }

      const from = this.state.startDate;
      const to = this.state.endDate;
      // const enteredTo = this.state.enteredTo;
      const modifiers = { start: from, end: to };
      let disabledBookingsInput = disabledBookings.slice();
      // disabledBookingsInput.push({after: to});
      const selectedDays = [from, { from, to }];

      // <DateRangePicker
      //   startDate={new moment(new Date())}
      //   startDateId="1234"
      //   endDate={null}
      //   endDateId="456"
      //   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
      //   focusedInput={null}
      //   onFocusChange={focusedInput => this.setState({ focusedInput })}
      // />
      // <div className={'dates-duration'}>
      //   <input placeholder={'Eg: 12/12/2018'}
      //     type='date' value={this.state.startDate}
      //     onChange={this.update('startDate')}/>
      //   <input placeholder={'Eg: 12/12/2018'}
      //     type='date' value={this.state.endDate}
      //     onChange={this.update('endDate')}/>
      // </div>

        return (
          <div>
            <img src={this.props.home.imageUrl} className={'homes-profile-image'} />
            <div className={'homes-profile-section'}>
              <div className={'homes-profile-info'}>

                <h3>{this.props.home.home_type}</h3>
                <div className={'homes-profile-header'}>
                  <div className={'homes-profile-header-title'}>
                    <h1>{this.props.home.title}</h1>
                    <span>{this.props.home.city}</span>
                  </div>
                  <div className={'homes-profile-header-pic'}>
                    <img src={this.props.home.profileUrl} />
                    <span>{this.props.home.fname}</span>
                  </div>
                </div>

                <div className={'homes-profile-features'}>
                  <span><i className="fas fa-users"></i> {this.props.home.guests} guests · <i class="fas fa-door-open"></i> {this.props.home.bedrooms} bedrooms ·  <i class="fas fa-bed"></i> {this.props.home.beds} beds ·  <i class="fas fa-bath"></i> {this.props.home.baths} baths</span>
                </div>

                <div className={'homes-profile-description'}>
                  {this.props.home.description}
                </div>

                <div className={'homes-profile-contact'} onClick={this.toggleHide}>
                  Read more about the space
                  <div className={`homes-profile-description ${this.state.hide}`}>
                    {this.props.home.extraInfo}
                  </div>
                </div>

                <div className={'homes-profile-contact'}>
                  Contact Host
                </div>

                <div className={'line-break-thin'} />

                <h2 className={'homes-amenities-header'}>Amenities</h2>
                <div className={'homes-profile-amenities'}>
                  {amenitiesFill}
                </div>

                <div className={'line-break-thin'} />

                <div className={'homes-availability'}>
                  <h2 className={'homes-amenities-header'}>Availability (Current Bookings)</h2>
                  <span className='time-since-update'>Updated {this.timeSinceUpdate()} days ago</span>
                  <DayPicker className={'calendar-avail'} numberOfMonths={2}
                    fromMonth={new Date()} disabledDays={disabledBookings}/>
                </div>

                <div className={'line-break-thin'} />

                <div>
                  <h2>{reviews.length} Reviews {overallRating}</h2>
                  <input
                    placeholder='Search Reviews'/>
                </div>

                {this.props.currentUser != 0 ? (<div className='create-review'>
                  <div className='create-review-header'>
                    <h2>Write a Review!</h2>

                  </div>

                  <div className='create-review-body'>
                    <textarea type='text' value={this.state.body}
                      onChange={this.update('body')} />

                    <div>
                      <select className={''} value={this.state.rating}
                        onChange={this.update('rating')}>
                        {[0,.5,1,1.5,2,2.5,3,3.5,4,4.5,5].map((opt,idx) =>
                          <option value={opt} key={idx}>{opt}</option>
                        )}
                      </select>
                      <button onClick={this.handleReviewSubmit}
                        type='submit'>Submit</button>
                    </div>
                  </div>
                </div>) : ""}

                <ul>
                  {reviews}
                </ul>

                <div className='buffer'/>
              </div>

              <form className={'homes-profile-book'} onSubmit={this.handleBookingSubmit}>
                <h2>${this.props.home.price} <span>per night</span></h2>
                <span> Rating (Eg: 4.5 out of 5 stars!)</span>
                <div className={'line-break-thin'} />

                <h4>Dates</h4>

                  <div className="InputFromTo">
                    <DayPickerInput
                      value={this.state.startDate}
                      placeholder="From"
                      format="LL"
                      formatDate={formatDate}
                      parseDate={parseDate}
                      dayPickerProps={{
                        fromMonth: this.state.startDate,
                        selectedDays,
                        disabledDays: disabledBookingsInput,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus()
                      }}
                      onDayChange={this.handleFromChange}
                    />{' '}—{' '}
                    <span className="InputFromTo-to">
                      <DayPickerInput
                        ref={el => (this.to = el)}
                        value={this.state.endDate}
                        placeholder="To"
                        format="LL"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                          month: this.state.startDate,
                          fromMonth: this.state.startDate,
                          selectedDays,
                          disabledDays: disabledBookingsInput,
                          modifiers,
                          numberOfMonths: 2
                        }}
                        onDayChange={this.handleToChange}
                      />
                    </span>
                  </div>

                <h4>Guests</h4>
                <select value={this.state.guests} onChange={this.update('guests')}>
                  {range(1, this.props.home.guests + 1, 1).map(num =>
                    <option value={num} key={num}>{`${num} guests`}</option>
                  )}
                </select>

                <input className={'form-submit'} type='submit'
                  value={'Book'}/>
                {bookingErrors}

                <div className={'homes-profile-disclaimer'}>
                  <span>This site doesn't charge yet</span>
                </div>
              </form>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <Loading />
          </div>
        );

    }
  }
}

export default HomeShow;
