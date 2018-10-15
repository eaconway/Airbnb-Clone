import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';

class Homes extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.action();
  }

  render(){
    let homes = this.props.homes.map(home => (
      <HomesIndexItem key={home.id} home={home}/>
    ));

    return (
      <div className={'search-homes-index'}>
        <div className={'fun-fact'}>
          <img src={'https://a0.muscache.com/airbnb/static/page3/icon-uc-trophy-3a3c80299c409c95fc1d65d3cec8792a.gif'} />
          <span>Over 2,000,000 guest reviews for these homes, with an average of 4.6 out of 5 stars.</span>
        </div>

        <h3 className={'num-homes'}>300+ homes</h3>
        <ul>
          {homes}
        </ul>
      </div>
    )
  }
};

export default Homes;
