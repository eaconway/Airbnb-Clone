import React from 'react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.handleSearch({
      author_id: this.props.authorId,
      query: this.props.result
    });
  }

  render(){
    let prompt = this.props.result === '' ? 'All Homes' : (
      'Homes in ' + this.props.result
    );
    return(
      <div className='search-item' onClick={this.handleSubmit}>
        <h2><i className="fas fa-home icon"></i>
        {prompt}</h2>
      </div>
    )
  }
}

export default SearchResultItem;
