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
    return(
      <div className='search-item' onClick={this.handleSubmit}>
        <h2><i className="fas fa-home icon"></i>
        Homes in {this.props.result}</h2>
      </div>
    )
  }
}

export default SearchResultItem;
