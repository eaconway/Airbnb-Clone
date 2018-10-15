import React from 'react';
import range from 'lodash/range';
import Calendar from './calendar_dates';
import moment from 'moment';


class HomeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      guests: 1,
      hide: 'hidden'
    }
    this.toggleHide = this.toggleHide.bind(this);
    this.timeSinceUpdate = this.timeSinceUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // debugger
    this.props.requestHome(this.props.match.params.homeId);
  }

  update(field){
    return e => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      return this.setState({[field]: value})
    }
  }

  handleSubmit(e){
    e.preventDefault();

    debugger
    console.log('hi');
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

  handleDateChange() {

  }

  render() {
    let amenities = ['internet', 'washer', 'dryer'];
    let amenitiesIcons = {
      internet: '<i class="fas fa-wifi"></i>',
      washer: "<img src={'https://image.flaticon.com/icons/svg/1104/1104590.svg'}",
      dryer: "<img src={'https://image.flaticon.com/icons/svg/35/35098.svg'}",
    }
    // Images from:
    // - https://www.flaticon.com/free-icon/drying-machine-outline_35098#term=drying%20machine&page=1&position=21
    // - https://www.flaticon.com/free-icon/washing-machine_1104590#term=washing%20machine&page=1&position=1

    let amenitiesFill =  this.props.home === undefined ? "" : (amenities.map((amenity, idx) => {
      if (this.props.home[amenity] && idx < amenities.length -1){
        return (
          <span>
            amenitiesIcons[amenity] amenity
          </span>
        );
      }
    }));

    switch(this.props.home) {
      case undefined:
        return (
          <div>
            <h1>loading</h1>
          </div>
        );
      default:
        return (
          <div>
            <img src={this.props.home.imageUrl} className={'homes-profile-image'} />
            <div className={'homes-profile-section'}>
              <div className={'homes-profile-info'}>

                <h3>{this.props.home.homeType}</h3>
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
                  <span><i class="fas fa-users"></i> {this.props.home.guests} guests · <i class="fas fa-door-open"></i> {this.props.home.bedrooms} bedrooms ·  <i class="fas fa-bed"></i> {this.props.home.beds} beds ·  <i class="fas fa-bath"></i> {this.props.home.baths} baths</span>
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
                  <h2 className={'homes-amenities-header'}>Availability</h2>
                  <span>Updated {this.timeSinceUpdate()} days ago</span>
                  <Calendar />
                </div>

                <div className={'line-break-thin'} />

                <div>
                  <h2>Reviews</h2>
                  <h3>Stars</h3>
                  <input
                    placeholder='Search Reviews'/>
                </div>
              </div>

              <form className={'homes-profile-book'} onSubmit={this.handleSubmit}>
                <h2>${this.props.home.price} <span>per night</span></h2>
                <span> Rating </span>
                <div className={'line-break-thin'} />

                <h4>Dates</h4>
                <div className={'dates-duration'}>
                  <input placeholder={'Eg: 12/12/2018'}
                    type='text' value={this.state.startDate}
                    onChange={this.update('startDate')}/>
                  <input placeholder={'Eg: 12/12/2018'}
                    type='text' value={this.state.endDate}
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
                <div className={'homes-profile-disclaimer'}>
                  <span>You won’t be charged yet</span>
                </div>
              </form>
            </div>
          </div>
        );
    }
  }
}

export default HomeShow;