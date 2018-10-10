import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchContainer from './nav_bar/search_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Modal from './session/modal';
// import Home from './home/home';
import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute} from '../utils/route_utils';

export default () => (
  <div>
    <Modal />
    <header className={'header'}>
      <Route path="/" component={SearchContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>
  </div>
);

// <header>
//   <Route path="/" component={SearchContainer} />
//   <Route path="/" component={NavBarContainer} />
// </header>

// <header>
//   <Route path="/" component={NavBarContainer} />
// </header>
//
// <Route path="/signup" component={SignupContainer} />
// <Route path="/login" component={LoginContainer} />

// <Route path="/signup" component={SignupContainer} />
// <Route path="/login" component={LoginContainer} />
