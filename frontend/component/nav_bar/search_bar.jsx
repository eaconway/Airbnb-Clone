import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search:'',
      showResults: 'hidden',
      query: '',
    };

    this.toggleResults = this.toggleResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.props.requestHomes();
  }

  toggleResults(e){
    e.preventDefault();

    // if (this.state.query.length === 0) {
    //   this.setState({showResults: "hidden"});
    // } else {
    //   this.setState({showResults: ""});
    // }
    debugger;
    let result = document.getElementsByClassName('search-results')[0];
    if (result.className.split(' ').includes("hidden")) {
      result.classList.remove("hidden");
    } else {
      result.classList.add("hidden");
    }
  }

  update(field){
    return e => (this.setState({[field]: e.target.value}))
  }

  handleSubmit(e){
    e.preventDefault();

    console.log('should submit here');
  }

  render() {
    return (
      <div className={'search-div'}>
        <Link to='/' className={'logo'} />

        <div className={'search-bar-div'} onClick={this.toggleResults}>
          <form className={'search-bar-form'}>
            <i className="fas fa-search icon"></i>
            <input className={'search-bar'} type="text"
              onChange={this.update('query')}
              value={this.state.query}/>

          </form>

          <ul className='search-results hidden'>
            <h1>sdfa</h1>
          </ul>
        </div>

      </div>
    );
  }
};

export default SearchBar;
