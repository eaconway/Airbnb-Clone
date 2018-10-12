import React from 'react';

import Modal from './session/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchContainer from './nav_bar/search_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import HomesFormContainer from './homes/homes_form_container';
import HomesIndexContainer from './homes/homes_index_container';

import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

export default () => (
  <div>
    <Modal />
    <header className={'header'}>
      <Route path="/" component={SearchContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <ProtectedRoute path='/users/:userId/homes' component={HomesIndexContainer} />
      <ProtectedRoute path='/homes/form' component={HomesFormContainer} />
    </Switch>
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
