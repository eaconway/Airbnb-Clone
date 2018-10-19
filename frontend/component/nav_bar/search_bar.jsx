import React from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './search_item';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search:'',
      showResults: 'hidden',
      query: '',
      results: ['hi','sdf'],
      loaded: false
    };

    this.toggleResults = this.toggleResults.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onlyUnique = this.onlyUnique.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount(){

    this.props.requestHomes();
    let userId = this.props.currentUser ? this.props.currentUser.id : 0;
    this.props.requestSearches(userId)
      .then(() => this.setState({
        loaded: true,
        results: this.props.searches.map(search => search.query)
      }));
  }

  toggleResults(e){
    e.preventDefault();

    if (this.state.showResults === 'hidden'){
      this.setState({showResults: ''});
    } else {
      this.setState({showResults: 'hidden'});
    }
    // let result = document.getElementsByClassName('search-results')[0];
    // if (result.className.split(' ').includes("hidden")) {
    //   result.classList.remove("hidden");
    // } else {
    //   result.classList.add("hidden");
    // }
  }

  onlyUnique(val, idx, self) {
    return self.indexOf(val) === idx;
  }

  handleQuery(e){
    let results = [];
    let query = e.target.value;

    let potResults = this.props.homes.map(home => {
      if (home.city.length > 1) {
        return home.city;
      }
    }).filter( this.onlyUnique );

    ;

    if (query === '') {
      results = this.props.searches.map(search => {
        if (search.query.length > 1) return search.query
      })
    } else {
      results = potResults.filter(res => {
        if(res.toLowerCase().includes(query.toLowerCase())){
          return res;
        }
      });
    }

    this.setState({results, query});
  }

  handleSearch(search){
    this.props.createSearch(search)
      .then(res => {

        this.props.history.push(`/search/${res.id}/`)
      })
  }

  render() {
    let results = this.state.loaded === false ? "" : (
      this.state.results.map((result,idx) => (
      <SearchItem result={result} key={idx} handleSearch={this.handleSearch}
        authorId={this.props.currentUser ? this.props.currentUser.id : 1}/>
    )));

    let search = this.props.searches[this.props.match.params.searchId]

    let placeholder = search === undefined ? (
      this.props.searches[this.props.match.params.searchId]
    ) : "" ;


    return (
      <div className={'search-div'}>
        <Link to='/' className={'logo'} />

        <div className={'search-bar-div'} onClick={this.toggleResults}>
          <form className={'search-bar-form'} onSubmit={this.handleSubmit}>
            <i className="fas fa-search icon"></i>
            <input className={'search-bar'} type="text"
              onChange={this.handleQuery}
              value={this.state.query}
              placeholder={placeholder}/>

          </form>

          <ul className={`search-results ${this.state.showResults}`}>
            { this.state.query === '' ? (
              <span className='search-results-header'> Recent Searches</span>
            ) : "" }
            {results}
          </ul>
        </div>

      </div>
    );
  }
};

export default SearchBar;
