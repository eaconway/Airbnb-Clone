import React from 'react';
import HomeMap from '../homes/home_map';
import HomesIndex from '../homes/homes_index';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      update: 0,
    }
    this.filter = {
      city: '',
      bounds: {
        lat: "",
        lng: ""
      }
    };
    this.buildFilter = this.buildFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterHomes = this.filterHomes.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount(){

    this.props.requestSearch(this.props.match.params.searchId)
    .then(() => this.setState({
      loaded: true
    }))
    .then(() => this.filter.city = this.props.search.query);
  }

  updateFilter(field, value){
    this.filter[field] = value;
    this.setState({step: this.state.step + 1})
  }

  filterHomes(){

    let filters = []
    Object.keys(this.filter).map(key => {
      if (key === 'bounds') {
        if (this.filter[key].lat != ''){
          filters.push({[key]: this.filter[key]})
        }
      } else if (this.filter[key] != '' ) {
        filters.push({[key]: this.filter[key]})
      }
    })

    let homes = this.props.homes;

    filters.forEach(filter => {
      if (Object.keys(filters[0])[0] === 'bounds'){
        debugger
        let ne = Object.values(filters[0])[0].northEast;
        let sw = Object.values(filters[0])[0].southWest;
        homes = homes.filter(home =>
          home.lat < ne.lat &&
          home.lng < ne.lng &&
          home.lat > sw.lat &&
          home.lng > sw.lng
        );
        // obj.name == filter.name && obj.address == filter.address
      } else {
        homes = homes.filter(home => home[Object.keys(filters[0])[0]] === Object.values(filters[0])[0])
      }
    });

    return homes;
  }

  buildFilter(){

  }

  resetFilter(){

  }

  render() {
    if (this.state.loaded) {
      // let homes = this.props.search ? (
      //   this.props.search.query === "" ? this.props.homes : this.filterHomes(this.props.search.query)
      // ) : "";

      let homes = this.filterHomes();

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
              <HomeMap homes={homes} updateFilter={this.updateFilter}/>
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
