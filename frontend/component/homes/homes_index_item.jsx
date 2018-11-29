import React from 'react';
import {Link} from 'react-router-dom';

class HomeIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      likeStatus: 'unliked',
    };

    this.props.like ? this.state.likeStatus = 'liked' : '';

    console.log('like is ', this.props.like);
    this.toggleHomeLike = this.toggleHomeLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleHomeLike(e){
    e.preventDefault();
    if (this.state.likeStatus === 'unliked'){
      //create like model association
      debugger;
      let like = {
        user_id: this.props.currentUser.id,
        home_id: this.props.home.id
      }
      // this.props.createLike(like)
      //   .then(() => {
      //     this.setState({likeStatus: 'liked'});
      //   })
      return this.setState({likeStatus: 'liked'});
    }
    //delete like model association
    // this.props.deleteLike()
    //   .then(() => {
    //     this.setState({likeStatus: 'unliked'});
    //   })
    return this.setState({likeStatus: 'unliked'});
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteHome(this.props.home.id);
  }

  render() {
    let amenities = ['internet', 'washer', 'dryer'];
    let amenitiesActive = amenities.filter(amenity => this.props.home[amenity]);
    let amenitiesFill = amenitiesActive.join(' · ');

    return (
      <Link className={'homes-index-item'} to={`/homes/${this.props.home.id}`}>
        <div className={'homes-index-image'} >
          <img src={this.props.home.imageUrl} />
          <div onClick={this.toggleHomeLike} className={this.state.likeStatus} />
        </div>
        <div className={'homes-index-info'}>
          <h3>{this.props.home.home_type}</h3>
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

          <div className={'homes-index-edit-options'}>
            {this.props.edit ? (
              <Link className={'homes-index-edit-link'}
                to={`/homes/${this.props.home.id}/edit`}>
                <button className={'homes-index-edit'}>Edit</button>
              </Link>
            ) : ''}

            {this.props.edit ? (
              <button onClick={this.handleDelete} className={'homes-index-delete'}>Delete</button>
            ) : ''}
          </div>
        </div>
      </Link>

    )
  }
}

export default HomeIndexItem;
