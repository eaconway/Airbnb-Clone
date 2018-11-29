import React from 'react';
import Loading from '../loading';
import HomeIndexItem from '../homes/homes_index_item';

class Saved extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    if (!this.props.currentUser){
      return (
        <div>
          <h1> You must be logged in to do this!</h1>
        </div>
      )
    } else if (this.props.homes.length > 0){
      return (
        <div>
          <h1> Loaded In </h1>
        </div>
      )
    } else {
      return (
        <div>
          <Loading />
        </div>
      )
    }
  }
}

export default Saved;
