import React from 'react';
import moment from 'moment';

class ReviewListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    return (
      <div className='reviews-item'>
        <div className='review-info'>

          <div className='review-pic'>
            <img className='review-profile-pic' src={this.props.review.profileUrl}/>
            <div>
              <h2>{this.props.review.authorName}</h2>
              <span>{new moment(this.props.review.created_at).format('MMMM YYYY')}</span>
            </div>
          </div>

          <div className='review-rating'>
            <i className="far fa-flag icon"></i>
            <span> Rating: {this.props.review.rating}</span>
          </div>
        </div>
        <div className='review-body-section'>
          <div className='review-body'>{this.props.review.body}</div>
          {this.props.review.author_id === this.props.currentUserId ? (
            <button onClick={this.handleDelete} >Delete</button>
          ) : ""}
        </div>
      </div>
    )
  }
};

export default ReviewListItem;
