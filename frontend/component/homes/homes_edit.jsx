import React from 'react';
import * as HomeOptions from '../../util/homes_util';

class HomeShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formInputCreator = this.formInputCreator.bind(this);
  }

  componentDidMount(){
    this.props.requestHome(this.props.match.params.homeId)
      .then((home) => this.setState(home));
  }

  update(field){
    return e => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      return this.setState({[field]: value});
    }
  }

  formInputCreator(field, seed){
    debugger
    return (
      <select value={this.state[field]} onChange={this.update(field)}>
      {seed.map((opt,idx) =>
        <option value={opt}
          key={idx}
          selected = {this.state[field] === opt ? true : false }>
          {opt}
        </option>
      )}
    </select>)
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    this.props.updateHome(formData);
  }

  handleDelete(e){
    e.preventDefault();
    debugger;
    this.props.deleteHome(this.props.match.params.homeId);
  }

  render() {
    debugger
    return (
    <div className={'homes-edit-container'}>
      <form className={'homes-edit-form'}>
        <div className={'homes-edit-header'}><h1>Edit your home</h1></div>

        <div className={'homes-edit-form-split'}>
          <div>
            <h4>Basic Home Details</h4>
            <h2>What kind of place do you have?</h2>
            <div className={'current-options'}>

            </div>
          </div>

          <div className={'line-divider'}/>



        </div>

        <div>
        </div>
        <div className={'homes-edit-submit'}>
          <button>All Homes</button>
          <button>Update</button>
        </div>
      </form>
    </div>
    )
  }
};

export default HomeShow;
