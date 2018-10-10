import React from 'react';
import { Link } from 'react-router-dom';

class Homes extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div className={'jumbo'}>
          <div className={'jumbo-main'}>

            <div className={'welcome'}>
              <div className={'welcome-header'}>
                <h3>HOST ON AIRBNB</h3>
                <h1>Earn money as an Airbnb host</h1>
              </div>

              <form className={'home-form-start'}>
                <input type='text'/>
              </form>
            </div>

            <div className={'welcome-callouts'}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homes;
