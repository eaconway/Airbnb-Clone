import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {userOptions:"hidden"};
    this.toggleUserOptions = this.toggleUserOptions.bind(this);
    this.toggleUserOptionsAndLogout = this.toggleUserOptionsAndLogout.bind(this);
  }

  toggleUserOptions(e){
    if (this.state.userOptions === 'hidden') {
      this.setState({userOptions: ""});
    } else {
      this.setState({userOptions: 'hidden'});
    }
  }

  toggleUserOptionsAndLogout(e){
    this.setState({userOptions: 'hidden'});
    this.props.logout();
  }

  render(){
    let session = this.props.currentUser ?
      (<div className='nav-list'>
        { this.props.currentUser.hostStatus ? (
          <Link to='/homes/form' className={'nav-link'}>Add a Listing</Link>
        ) : (
          <Link to='/homes/form' className={'nav-link'}>Become a Host</Link>
        )}
        <Link to='/' className={'nav-link'}>Saved</Link>
        <Link to={`/users/${this.props.currentUser.id}/bookings`} className={'nav-link'}>Trips</Link>
        <Link to='/' className={'nav-link'}>Messages</Link>

        <div className={'nav-link'} onClick={this.toggleUserOptions}>
          <img className='profile-pic' src={this.props.currentUser.profileUrl}/>
        </div>

        <div className={`${this.state.userOptions} user-options`} onClick={this.toggleUserOptions}>
          <Link to='/' onClick={this.toggleUserOptions}>Profile</Link>
          <Link to={`/users/${this.props.currentUser.id}/homes`}
            onClick={this.toggleUserOptions}>My Homes</Link>
          <div onClick={this.toggleUserOptionsAndLogout}>Logout</div>
        </div>

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
      <ul className={'nav-list-ul'}>
        {session}
      </ul>
    )
  }
}


export default NavBar;

// <img className='profile' src={'https://bit.ly/2CxW5X5'} />
