import React from 'react';
import HomeMap from '../homes/home_map';
import HomesIndex from '../homes/homes_index';

class Search extends React.Component {
  render() {
    return (
      <div className={'search-container'}>

        <div className={'search-filters'}>
          <button>Date</button>
          <button>Guests</button>
          <button>Home Type</button>
        </div>

        <div className={'search-results'}>
          <HomesIndex homes={this.props.homes}
            action={this.props.action}/>
          <div className={'search-homes-map'}>
            <HomeMap homes={this.props.homes} updateFilter={this.props.updateFilter}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
