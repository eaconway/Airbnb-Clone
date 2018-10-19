import React from 'react';
import HomeMap from '../homes/home_map';
import HomesIndex from '../homes/homes_index';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
    this.buildFilter = this.buildFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterHomes = this.filterHomes.bind(this);
  }

  componentDidMount(){
    debugger
    this.props.requestSearch(this.props.match.params.searchId)
    .then(() => this.setState({
      loaded: true
    }));
  }

  filterHomes(){
    let homes = this.props.homes.filter(home => home.city === this.props.search.query);
  }

  buildFilter(){

  }

  resetFilter(){

  }

  render() {
    if (this.state.loaded) {
      let homes = this.props.search ? (
        this.props.homes.filter(home => home.city === this.props.search.query)
      ) : "";

      return (
        <div className={'search-container'}>

          <div className={'search-filters'}>
            <button>Date</button>
            <button>Guests</button>
            <button>Home Type</button>
            <button>Price</button>
            <button>More Filters</button>
          </div>

          <div className={'search-results'}>
            <HomesIndex homes={homes}/>
            <div className={'search-homes-map'}>
              <HomeMap homes={homes} updateFilter={this.props.updateFilter}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      )
    }
  }
}

export default SearchResults;
