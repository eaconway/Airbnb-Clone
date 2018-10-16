import React from 'react';
import { Link } from 'react-router-dom';
import * as HomeOptions from '../../util/homes_util';
import FormMap from './form_map';

class Homes extends React.Component {
  constructor(props){
    super(props);
    this.state={
      step: 1,
      city: 'Konoha',
      guests: 1,
      type:'Entire Place',
      bedrooms: 0,
      beds: 0,
      baths: 0,
      address: '',
      state: '',
      country: '',
      zipcode: '',
      internet: false,
      washer: false,
      dryer: false,
      addressInputType: 'address',
      status: 'active',
      imageFile: null,
      imageUrl: null,
      lat: 0,
      lng: 0,
      title: '',
      price: '',
      description: '',
      extraInfo: '',
    };
    // if (this.props.currentUser.hostStatus) {
    //   this.state.step = 2;
    // }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.pageBack = this.pageBack.bind(this);
    this.toggleAddressForm = this.toggleAddressForm.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  update(field){
    return e => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      return this.setState({[field]: value})
    }
  }

  pageBack(){
    this.setState({step: this.state.step -1})
  }

  handleFormClick(coords, formatted_address){
    this.setState({
      lat: coords.lat,
      lng: coords.lng
    });
    let faddress = formatted_address.split(',');
    let edited_faddress = faddress.map(part => part.split(' '));

    //Deciding to come back to this later, if I've got time, given
    //differences in how Google maps displays data in Japan
    // this.setState({
    //   address: ,
    //   city: ,
    //   state: ,
    //   country: faddress[0],
    //   zipcode: ,
    // });

  }

  toggleAddressForm(e){
    e.preventDefault();
    if(this.state.addressInputType === 'address') {
      return this.setState({addressInputType: ''});
    }
    this.setState({addressInputType: 'address'});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({street_address: this.state.address});

    if (this.state.step != 4) {
      this.setState({step: this.state.step + 1});
    } else {
      const formData = new FormData();

      if(this.state.imageFile) {
        formData.append('home[image]', this.state.imageFile);
      }

      formData.append('home[city]', this.state.city);
      formData.append('home[guests]', this.state.guests);
      formData.append('home[home_type]', this.state.type);
      formData.append('home[bedrooms]', this.state.bedrooms);
      formData.append('home[beds]', this.state.beds);
      formData.append('home[baths]', this.state.baths);
      formData.append('home[street_address]', this.state.address);
      formData.append('home[state]', this.state.state);
      formData.append('home[zipcode]', this.state.zipcode);
      formData.append('home[internet]', this.state.internet);
      formData.append('home[washer]', this.state.washer);
      formData.append('home[dryer]', this.state.dryer);
      formData.append('home[status]', this.state.status);
      formData.append('home[lat]', this.state.lat);
      formData.append('home[lng]', this.state.lng);
      formData.append('home[title]', this.state.title);
      formData.append('home[price]', this.state.price);
      formData.append('home[description]', this.state.description);
      formData.append('home[extra_info]', this.state.extraInfo);

      this.props.createHome(formData)
        .then(() => this.props.history.push(`/users/${this.props.currentUser.id}/homes`));
    }
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result})
    }
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  formInputCreator(field, seed){
    return (
      <select className={''} value={this.state[field]} onChange={this.update(field)}>
      {seed.map((opt,idx) =>
        <option value={opt}
          key={idx}
          selected = {this.state[field] === opt ? true : false }>
          {opt}
        </option>
      )}
    </select>)
  }

  capitalize(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render(){
    console.log(this.state);

    let addressInput = (
      <div>
        <label className={'home-form-input'}>Street Address
          <input type='text' placeholder='e.g. 123 Main St.'
            value={this.state.address} onChange={this.update('address')}
            />{"\n"}
        </label>
        <div className={'horizontal-form-input '}>
          <label className={'home-form-input'}>City
            <input type='text' placeholder='e.g. San Francisco'
              value={this.state.city} onChange={this.update('city')}
              />{"\n"}
          </label>

          <label className={'home-form-input'}>State
            <input type='text' placeholder='e.g. CA'
              value={this.state.state} onChange={this.update('state')}
              />{"\n"}
          </label>
        </div>

        <div className={'horizontal-form-input '}>
          <label className={'home-form-input'}>Country
            <input type='text' placeholder='e.g. Japan'
              value={this.state.country} onChange={this.update('country')}
              />{"\n"}
          </label>

          <label className={'home-form-input'}>ZIP Code
            <input type='text' placeholder='e.g. 94063'
              value={this.state.zipcode} onChange={this.update('zipcode')}
              />{"\n"}
          </label>
        </div>
      </div>
    );

    let mapInput = (
      <div className={'lat-long-form'}>
        <div className={'lat-long-input'}>
          <label className={'home-form-input'}>Latitude
            <input type='number' placeholder='e.g. 123 Main St.'
              value={this.state.lat} onChange={this.update('lat')}
              />{"\n"}
          </label>

          <label className={'home-form-input'}>Longitude
            <input type='number' placeholder='e.g. 123 Main St.'
              value={this.state.lng} onChange={this.update('lng')}
              />{"\n"}
          </label>
        </div>

        <h3>OR</h3>

        <FormMap handleFormClick={this.handleFormClick} />
      </div>
    );

    switch(this.state.step) {

      case 1:
        return (
          <div className={'jumbo'}>
            <div className={'jumbo-main'}>

              <div className={'welcome'}>
                <div className={'welcome-header'}>
                  <h3>HOST ON AIRBNB</h3>
                  <h1>Earn money as an Airbnb host</h1>
                </div>

                <form className={'home-form-start session-form'} onSubmit={this.handleSubmit}>
                  <h2>Find out what you could earn</h2>

                  {this.formInputCreator('city', HomeOptions['city'])}

                  <select value={this.state.guests} onChange={this.update('guests')}>
                    {HomeOptions['guests'].map(num =>
                      <option value={num} key={num}>{`${num} guests`}</option>
                    )}
                  </select>

                  {this.formInputCreator('type', HomeOptions['type'])}

                  <h1>$$$$</h1>
                  <p>monthly potential</p>

                  <input type='submit' value='Get Started' className={'form-submit'} />
                </form>
              </div>

              <div className={'welcome-callouts'}>
                <div>
                  <h1>Why host on Airbnb?</h1>
                  <p>No matter what kind of home or room you have to share,
                    Airbnb makes it simple and secure to earn money and reach millions
                    of travelers looking for unique places to stay, just like yours.</p>
                </div>
                <div>
                  <h1>You’re in control</h1>
                  <p>With Airbnb, you’re in full control of your availability,
                     prices, house rules, and how you interact with guests.
                     You can set check-in times and handle the process however you like.</p>
                </div>
                <div>
                  <h1>We’re there at every step</h1>
                  <p>Airbnb offers tools, hospitality tips, 24/7 support,
                    and an online community of experienced hosts for questions
                    and sharing ideas for success.</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className={'form-container'}>
            <div className={'home-form'}>
              <h1>Hi, {this.props.currentUser.fname}!
                Let’s get started listing your space.</h1>
              <div>
                <h4>Step 1</h4>
                <h2>What kind of place do you have?</h2>
                <div className={'current-options'}>
                  {Object.keys(this.state).map((field, idx) => {
                    if (field != 'step' && this.state[field] != '' && idx <= 3){
                      return (
                        <label className={'chosen-fields'}>{this.capitalize(field)}
                          {this.formInputCreator(field, HomeOptions[field])}
                        </label>
                      )
                    }
                  })}
                </div>
              </div>

              <div className={'line-divider'}/>

              <form onSubmit={this.handleSubmit}>
                <div>
                  <h4>Step 2</h4>
                  <h2>Now, let's talk the details</h2>
                </div>

                <label className={'chosen-fields number-fields'}>
                  {"So...let's talk bedrooms. What're working with?"}
                  {this.formInputCreator('bedrooms', HomeOptions['bedrooms'])}
                </label>

                <label className={'chosen-fields number-fields'}>
                  {"OK, and how many beds can guests use?"}
                  {this.formInputCreator('beds', HomeOptions['beds'])}
                </label>

                <label className={'chosen-fields number-fields'}>
                  {"Now for some messy business. What's the bathroom situation?"}
                  {this.formInputCreator('baths', HomeOptions['baths'])}
                </label>

                <h2>Other Amenities</h2>
                <div className={'home-amenities'}>
                  <label className={'checkbox-field'}>
                    <input type='checkbox' checked={this.state.internet}
                      onChange={this.update('internet')} className={"regular-checkbox"} />
                    Internet?
                  </label>

                  <label className={'checkbox-field'}>
                    <input type='checkbox' checked={this.state.washer}
                      onChange={this.update('washer')} className={"regular-checkbox"} />
                    Washer?
                  </label>

                  <label className={'checkbox-field'}>
                    <input type='checkbox' checked={this.state.dryer}
                      onChange={this.update('dryer')} className={"regular-checkbox"} />
                    Dryer?
                  </label>

                </div>

                <div className={'line-divider'}/>

                <div>
                  <h4>Step 3</h4>
                  <h2>Where's your place located?</h2>
                </div>

                <div>
                  <button onClick={this.toggleAddressForm}>Toggle Address Input Method</button>
                </div>

                {this.state.addressInputType === 'address' ? addressInput :
                  mapInput}

                <div className={'submitDiv'}>
                  <button onClick={this.pageBack}>Back</button>
                  <button onClick={this.handleSubmit}>Next</button>
                </div>
              </form>
            </div>

            <div className={'form-image'}></div>
          </div>
        );
      case 3:
        const preview = this.state.imageUrl ? (
          <div>
            <h3> Image Preview </h3>
            <img className={'image-upload-preview'} src={this.state.imageUrl} />
          </div>
         ): null ;

        return (
          <div className={'form-container'}>
            <div className={'home-form'}>
              <form onSubmit={this.handleSubmit}>
                <h1>Bring your place to life!</h1>

                <label className={'home-form-input'}>What's you're place going to be called?
                  <input type='text' placeholder='e.g. My Summer Getaway'
                    value={this.state.title} onChange={this.update('title')}
                    />{"\n"}
                </label>

                <label className={'home-form-input'}>And how much should it cost, per night? (USD)
                  <input type='text' placeholder="e.g. Dolla Dolla bills ya'll"
                    value={this.state.price} onChange={this.update('price')}
                    />{"\n"}
                </label>

                <h2>Lastly, Upload a photo: </h2>
                <input type='file' onChange={this.handleFile}/>
                {preview}
                <div className={'submitDiv'}>
                  <button onClick={this.pageBack}>Back</button>
                  <button onClick={this.handleSubmit}>Next</button>
                </div>
              </form>

            </div>
            <div className={'form-image'}></div>
          </div>
        )

      case 4:

        return (
          <div className={'form-container'}>
            <div className={'home-form'}>
              <form onSubmit={this.handleSubmit}>
                <h1>Last Steps</h1>

                <label className={'home-form-input'}>Tell folks alittle about your place!
                  <textarea type='text' placeholder='e.g. My place is awesome because...'
                    value={this.state.description} onChange={this.update('description')}
                    />{"\n"}
                </label>

                <label className={'home-form-input'}>Any additional info you'd like to share?
                  <textarea type='text' placeholder="e.g. And MUCH more detail"
                    value={this.state.extraInfo} onChange={this.update('extraInfo')}
                    />{"\n"}
                </label>

                <div className={'submitDiv'}>
                  <button onClick={this.pageBack}>Back</button>
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
              </form>

            </div>
            <div className={'form-image'}></div>
          </div>
        )
    }
  }
}

export default Homes;
