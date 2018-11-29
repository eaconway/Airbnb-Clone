import React from 'react';
import Loading from '../loading';
import HomesIndexItem from '../homes/homes_index_item';

class Saved extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    };
    this.filterHomes = this.filterHomes.bind(this);
  }

  componentDidMount(){

  }

  filterHomes(){
    let homes = [];

    this.props.homes.forEach(home => {
      for (let i = 0; i < this.props.likes.length; i++){
        if(home.id === this.props.likes[i].home_id) {
            homes.push(home);
        }
      }
    });

    return homes;
  }

  render() {
    if (!this.props.currentUser){
      return (
        <div>
          <h1> You must be logged in to do this!</h1>
        </div>
      )
    } else if (this.props.homes.length > 0 && this.props.likes.length === 0){
      return (
        <div className='saved-index'>
          <h1>Your Saved Homes</h1>
          <h2>Unfortuantely, you don't have any saved homes</h2>
          <h3>Try liking homes on thir pages or in your search results.</h3>
        </div>
      )
    } else if (this.props.homes.length > 0 && this.props.likes.length > 0){
      let homes = this.filterHomes();

      homes = homes.map(home => {
        let like = {};
        for (let i = 0; i < this.props.likes.length; i++){
          if (this.props.likes[i].home_id === home.id){
            like = this.props.likes[i];
          }
        }
        return <HomesIndexItem key={home.id} home={home} like={like}/>
      });

      let homesSaved = homes.length === 0 ? '' : (
        homes.length === 1 ? homes.length + ' home' : homes.length + ' homes'
      );

      return (
        <div className='saved-index'>
          <h1>Your Saved Homes</h1>
          <span>{homesSaved}</span>
          <ul>
            {homes}
          </ul>
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
