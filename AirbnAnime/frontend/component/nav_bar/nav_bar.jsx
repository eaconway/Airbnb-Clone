import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let session = this.props.currentUser ?
      (<div className='nav-list'>
        <Link to='/' className={'nav-link'}>Become a Host</Link>
        <Link to='/' className={'nav-link'}>Saved</Link>
        <Link to='/' className={'nav-link'}>Trips</Link>
        <Link to='/' className={'nav-link'}>Messages</Link>
        <div className='profile-pic' />
      </div> ) :
      (<div className='nav-list'>
        <Link to='/' className={'nav-link'}>Become a Host</Link>
        <Link to='/' className={'nav-link'}>Help</Link>
        <div onClick={() => this.props.openModal('login')}
           className={'nav-link'}>Login</div>
        <div onClick={() => this.props.openModal('signup')}
           className={'nav-link'}>Signup</div>
      </div>)

    return (
      <div>
        <ul>
          {session}
        </ul>
      </div>
    )
  }
}


export default NavBar;

// <img className='profile' src={'https://bit.ly/2CxW5X5'} />
