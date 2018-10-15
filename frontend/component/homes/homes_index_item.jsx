import React from 'react';
import {Link} from 'react-router-dom';

class HomeIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      likeStatus: 'unliked',
    };
    this.toggleHomeLike = this.toggleHomeLike.bind(this);
  }

  toggleHomeLike(e){
    e.preventDefault();
    if (this.state.likeStatus === 'unliked'){
      //create like model association
      return this.setState({likeStatus: 'liked'});
    }
    //delete like model association
    return this.setState({likeStatus: 'unliked'});
  }

  render() {
    let amenities = ['internet', 'washer', 'dryer'];
    let amenitiesFill = amenities.map((amenity, idx) => {
      if (this.props.home[amenity] && idx < amenities.length -1){
        return (amenity + ' · ');
      }
      return (amenity);
    });

    debugger;
    return (
      <Link className={'homes-index-item'} to={`/homes/${this.props.home.id}`}>
        <div className={'homes-index-image'} >
          <img src={this.props.home.imageUrl} />
          <div onClick={this.toggleHomeLike} className={this.state.likeStatus} />
        </div>
        <div className={'homes-index-info'}>
          <h3>{this.props.home.homeType}</h3>
          <h2>{this.props.home.title}</h2>
          <span>{this.props.home.guests} guests · {this.props.home.bedrooms}
             bedrooms · {this.props.home.beds} beds · {this.props.home.baths}
             baths</span>
           <span>{amenitiesFill}</span>
        </div>
        <div className={'homes-index-stats'}>
          <h2>${this.props.home.price}</h2>
          <h3>per night</h3>
          <span>Rating</span>
          <span>Free Cancellation</span>
        </div>
      </Link>

    )
  }
}

export default HomeIndexItem;
