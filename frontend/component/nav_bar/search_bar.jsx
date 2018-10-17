import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search:''
    };
  }

  render() {
    return (
      <div className={'search-div'}>
        <Link to='/' className={'logo'} />
        <div className={'search-bar-div'}>
          <i className="fas fa-search icon"></i>
          <input className={'search-bar'} type="text"/>
        </div>
      </div>
    );
  }
};

export default SearchBar;
