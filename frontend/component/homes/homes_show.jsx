import React from 'react';
import range from 'lodash/range';
import Calendar from './calendar_dates';
import moment from 'moment';
import ReviewListItem from '../reviews/review_list_item';
import Loading from '../loading';

class HomeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guests: 1,
      startDate: '',
      endDate: '',
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
  }

  componentDidMount(){
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
    debugger
    this.props.createReview(this.state);
  }

  render() {
    let amenities = ['internet', 'washer', 'dryer'];
    let amenitiesIcons = {
      internet: <i class="fas fa-wifi homes-icon"></i>,
      washer: <img className={'homes-icon'} src={'https://image.flaticon.com/icons/svg/1104/1104590.svg'} />,
      dryer: <img className={'homes-icon'} src={'https://image.flaticon.com/icons/svg/35/35098.svg'} />,
    }
    // Images from:
    // - https://www.flaticon.com/free-icon/drying-machine-outline_35098#term=drying%20machine&page=1&position=21
    // - https://www.flaticon.com/free-icon/washing-machine_1104590#term=washing%20machine&page=1&position=1

    let amenitiesFill =  this.props.home === undefined ? "" : (amenities.map((amenity, idx) => {
      if (this.props.home[amenity]){
        return (
          <div className={'homes-profile-amenities-item'}>
            {amenitiesIcons[amenity]} {amenity}
          </div>
        );
      }
    }));
    debugger

    let reviews = this.props.reviews.length === 0 ? "" : (
      this.props.reviews.filter(review => review != undefined).map((review, idx) => {
        if (review != undefined) {
          return <ReviewListItem review={review} key={idx}
            currentUserId={this.props.currentUser.id} deleteReview={this.props.deleteReview}/>
        }
      })
    );

    if (this.state.loaded === true) {
      let bookings = this.props.bookings.length === 0 ? "" : (
      this.props.bookings.map(booking => {
        let start = new moment(booking.start_date);
        let end = new moment(booking.end_date);
        let diff = new moment.duration(new Date(booking.end_date) - new Date(booking.start_date));
        let duration = Math.floor(diff.asDays());

        return <li>Start: {start.format("MMM Do")} - End: {end.format("MMM Do")}: {duration} nights</li>
      }));

      let errors = this.props.errors ? (
        <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
      ) : "";
      let overallRating = '';
      debugger
      if (this.props.reviews.length > 0) {
        let sumRating = 0;
        reviews.forEach(review => sumRating += review.rating);
        let overallRating = sumRating/reviews.length;
      }

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
                  <span>Updated {this.timeSinceUpdate()} days ago</span>
                  <ul className={'homes-show-bookings'}>
                    {bookings}
                  </ul>
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
                <div className={'dates-duration'}>
                  <input placeholder={'Eg: 12/12/2018'}
                    type='date' value={this.state.startDate}
                    onChange={this.update('startDate')}/>
                  <input placeholder={'Eg: 12/12/2018'}
                    type='date' value={this.state.endDate}
                    onChange={this.update('endDate')}/>
                </div>

                <h4>Guests</h4>
                <select value={this.state.guests} onChange={this.update('guests')}>
                  {range(1, this.props.home.guests + 1, 1).map(num =>
                    <option value={num} key={num}>{`${num} guests`}</option>
                  )}
                </select>

                <input className={'form-submit'} type='submit'
                  value={'Book'}/>
                {errors}

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
