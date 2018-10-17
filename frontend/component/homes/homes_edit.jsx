import React from 'react';
import * as HomeOptions from '../../util/homes_util';
import FormMap from './form_map';
import { Link } from 'react-router-dom';

class HomeShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formInputCreator = this.formInputCreator.bind(this);
    this.capitalize = this.capitalize.bind(this);

  }

  componentDidMount(){
    this.props.requestHome(this.props.match.params.homeId)
      .then(() => this.setState(this.props.home));
  }

  update(field){
    return e => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      return this.setState({[field]: value});
    }
  }

  formInputCreator(field, seed){
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

  handleDelete(e){
    e.preventDefault();
    this.props.deleteHome(this.props.match.params.homeId);
  }

  handleFormClick(coords, formatted_address){
    this.setState({
      lat: coords.lat,
      lng: coords.lng
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();

    if(this.state.imageFile) {
      formData.append('home[image]', this.state.imageFile);
    }

    ['city', 'guests','home_type', 'bedrooms', 'beds', 'baths', 'state',
      'zipcode', 'internet' ,'washer', 'dryer', 'status', 'lat', 'lng',
      'title', 'price', 'description', 'extraInfo',
      'streetAddress'].forEach(field => {
        formData.append(`home[${field}]`, this.state[field]);
      });

    formData.append('home[id]', this.props.match.params.homeId);

    this.props.updateHome(formData);
  }

  render() {

    if (this.props.home != undefined) {
      let initial = ['city', 'guests', 'homeType'].map((field) => (
        <div className={'chosen-fields'}>{this.capitalize(field)}
          {this.formInputCreator(field, HomeOptions[field])}
        </div>
      ));

      const preview = this.state.imageUrl ? (
        <div>
          <h4> Image Preview </h4>
          <img className={'image-upload-preview'} src={this.state.imageUrl} />
        </div>
       ): null ;

      let formatedDate = new Date(this.state.updated_at).toDateString();

      return (
        <div className={'homes-edit-container'}>
          <form className={'homes-edit-form'}>
            <div className={'homes-edit-header'}>
              <h1>Edit your home:
                <input className={'home-title-form'} type='text' value={this.state.title} />
              </h1>
            </div>

            <div className={'homes-edit-form-split'}>

              <div className={'homes-edit-form-sect1'}>
                <h4>Basic Home Details</h4>
                <div className={'options-section'}>
                  {initial}

                  <label className={'chosen-fields'}>Price (USD)
                    <input type='text'
                      value={this.state.price} onChange={this.update('price')}
                      />{"\n"}
                  </label>
                </div>

                <h4>Amenities</h4>
                <div className={'options-section'}>
                  <label className={'chosen-fields number-fields'}>{"Bedrooms"}
                    {this.formInputCreator('bedrooms', HomeOptions['bedrooms'])}
                  </label>

                  <label className={'chosen-fields number-fields'}>{"Beds"}
                    {this.formInputCreator('beds', HomeOptions['beds'])}
                  </label>

                  <label className={'chosen-fields number-fields'}>{"Baths"}
                    {this.formInputCreator('baths', HomeOptions['baths'])}
                  </label>

                  <label className={'checkbox-field'}>
                    Internet?
                    <input type='checkbox' checked={this.state.internet}
                      onChange={this.update('internet')} className={"regular-checkbox"} />
                  </label>

                  <label className={'checkbox-field'}>
                    Washer?
                    <input type='checkbox' checked={this.state.washer}
                      onChange={this.update('washer')} className={"regular-checkbox"} />
                  </label>

                  <label className={'checkbox-field'}>
                    Dryer?
                    <input type='checkbox' checked={this.state.dryer}
                      onChange={this.update('dryer')} className={"regular-checkbox"} />
                  </label>
                </div>

                <h4>Location</h4>
                <div className={'options-section'}>
                  <label className={'chosen-fields'}>Street Address
                    <input type='text'
                      value={this.state.streetAddress} onChange={this.update('streetAddress')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>City
                    <input type='text'
                      value={this.state.city} onChange={this.update('city')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>State
                    <input type='text'
                      value={this.state.state} onChange={this.update('state')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>Country
                    <input type='text'
                      value={this.state.country} onChange={this.update('country')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>ZIP Code
                    <input type='text'
                      value={this.state.zipcode} onChange={this.update('zipcode')}
                      />{"\n"}
                  </label>
                </div>
              </div>

              <div className={'homes-edit-form-sect2'}>
                <h4>Home Image</h4>
                <input type='file' onChange={this.handleFile}/>
                {preview}

                <h4>Additional Info</h4>
                <div className={'options-section'}>
                  <label className={'chosen-fields'}>Description
                    <textarea type='text' value={this.state.description}
                      onChange={this.update('description')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>Extra Info
                    <textarea type='text'
                      value={this.state.extraInfo} onChange={this.update('extraInfo')}
                      />{"\n"}
                  </label>
                </div>

                <h4>Additional Info</h4>
                <div className={'options-section'}>
                  <label className={'chosen-fields'}>Latitude
                    <input type='number'
                      value={this.state.lat} onChange={this.update('lat')}
                      />{"\n"}
                  </label>

                  <label className={'chosen-fields'}>Longitude
                    <input type='number'
                      value={this.state.lng} onChange={this.update('lng')}
                      />{"\n"}
                  </label>

                  <FormMap handleFormClick={this.handleFormClick} />
                </div>
              </div>

            </div>

            <div>
            </div>
            <div className={'homes-edit-submit'}>
              <Link to={`/users/${this.props.currentUser.id}/homes`}><button>Back</button></Link>
              <button className={'homes-index-delete'} onClick={this.props.deleteHome}
                >Delete</button>
              <button onClick={this.handleSubmit}>Saved</button>
              <div className={'last-updated'}>Last updated
                 on {new Date(this.state.updated_at).toDateString()} at {new Date(this.state.updated_at).toTimeString()}</div>
            </div>
          </form>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
};

export default HomeShow;
