import React from 'react';
import Loading from './loading';
import { cityImageUrls } from '../util/home_page_util';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.onlyUnique = this.onlyUnique.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  onlyUnique(val, idx, self) {
    return self.indexOf(val) === idx;
  }

  handleSearch(e, city){
    e.preventDefault();
    this.props.createSearch({
      author_id: (this.props.currentUser ? this.props.currentUser.id : 1),
      query: city
    }).then(res => {
        this.props.history.push(`/search/${res.id}/`)
      })
  }

  render(){
    if (this.props.homes) {
      let cities = ['Konoha', 'City A', 'Assassinville',
        'Karakura Town', 'Whole Cake Island'];

      return (
        <div className='home-page-container'>
          <div className='home-page-section'>
            <h1>Take a look around!</h1>
            <div className='recommended-cities welcome' onClick={(e) => this.handleSearch(e, '')}>
            </div>
          </div>
          <div className='home-page-section'>
            <h1>Recommended for you</h1>
            <div className='recommended-cities'>
              <div className='recco-city' id='konoha' onClick={(e) => this.handleSearch(e, 'Konoha')}>
                <h2>Konoha</h2>
              </div>

              <div className='recco-city' id='citya' onClick={(e) => this.handleSearch(e, 'City A')}>
                <h2>City A</h2>
              </div>

              <div className='recco-city' id='karakura' onClick={(e) => this.handleSearch(e, 'Karakura Town')}>
                <h2>Karakura Town</h2>
              </div>

              <div className='recco-city' id='assassinville' onClick={(e) => this.handleSearch(e, 'Assassinville')}>
                <h2>Assassinville</h2>
              </div>

              <div className='recco-city' id='whi' onClick={(e) => this.handleSearch(e, 'Whole Cake Island')}>
                <h2>Whole Cake Island</h2>
              </div>
            </div>
          </div>
          <div className='home-page-section'>
            <h1>Explore Japan!</h1>
            <div className='recommended-cities japan-search' onClick={(e) => this.handleSearch(e, '')}>
            </div>
          </div>
        </div>
      )
    } else {
      <div>
        <Loading />
      </div>
    }
  }
}

export default Home;
