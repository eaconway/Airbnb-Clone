import React from 'react';
import HomeMap from '../homes/home_map';
import HomesIndex from '../homes/homes_index';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      update: 0,
      filter: {
        city: '',
        bounds: {
          lat: "",
          lng: ""
        },
        homeType:'',
        guests: ''
      }
    }
    this.buildFilter = this.buildFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterHomes = this.filterHomes.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    console.log('constructor finished');
  }

  componentDidMount(){
    this.props.requestSearch(this.props.match.params.searchId)
    .then(() => {
      let filter = this.state.filter;
      filter.city = this.props.search.query
      this.setState({loaded: true, filter});
    });
  }

  updateFilter(field, value){
    let filter = this.state.filter;
    filter[field] = value;
    this.setState({step: this.state.step + 1, filter })
  }

  filterHomes(){

    let filters = []
    Object.keys(this.state.filter).map(key => {
      if (key === 'bounds') {
        if (this.state.filter[key].lat != ''){
          filters.push({key, value: this.state.filter[key]})
        }
      } else if (this.state.filter[key] != '' ) {
        filters.push({key, value: this.state.filter[key]})
      }
    })

    // console.log('filtering homes');
    // if(this.props.search){
    //   debugger;
    // }
    // make dictionary more descriptive

    let homes = this.props.homes;

    filters.forEach(filter => {
      if (filter.key === 'bounds'){
        let ne = filter.value.northEast;
        let sw = filter.value.southWest;
        homes = homes.filter(home =>
          home.lat < ne.lat &&
          home.lng < ne.lng &&
          home.lat > sw.lat &&
          home.lng > sw.lng
        );
        // obj.name == filter.name && obj.address == filter.address
      } else if (filter.key === 'guests') {
        homes = homes.filter(home => {
          return home[filter.key] >= filter.value;
        });
      } else if (filter.key === 'price') {
        console.log('Fake filter price');
      } else {
        // works for City, Home Type
        homes = homes.filter(home => {
          return home[filter.key] === filter.value;
        });
      }
    });

    console.log('homes returned', homes);

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
