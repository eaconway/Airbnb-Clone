import React from 'react';
import { Link } from 'react-router-dom';
import HomesIndexItem from './homes_index_item';

class Homes extends React.Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    debugger
    this.props.action();
  }

  handleDelete(id){
    this.props.deleteHome(id)
  }

  render(){
    let homes = this.props.homes.map(home => (
      <HomesIndexItem key={home.id} home={home} edit={'true'}
        handleDelete={this.handleDelete}/>
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
