import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';

class Homes extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    debugger
    this.props.action();
  }

  render(){
    let homes = this.props.homes.map(home => (
      <HomesIndexItem key={home.id} home={home} edit={'true'}
        deleteHome={this.props.deleteHome}/>
    ));

    return (
      <div className={'search-homes-index'}>
        <ul>
          {homes}
        </ul>
      </div>
    )
  }
};

export default Homes;
