import React from 'react';

import Modal from './session/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBarContainer from './nav_bar/search_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import HomesFormContainer from './homes/homes_form_container';
import HomesUserIndexContainer from './homes/homes_user_index_container';
import HomesShowContainer from './homes/homes_show_container';
import HomesEditContainer from './homes/homes_edit_container';

import SearchContainer from './search/search_container';

import BookingsIndexContainer from './bookings/bookings_index_container';

import CalendarTest from './homes/calendar_dates';

import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

export default () => (
  <div>
    <Modal />
    <header className={'header'}>
      <Route path="/" component={SearchBarContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>

    <div className={'main-content'}>
      <Switch>
        <ProtectedRoute path='/homes/:homeId/edit' component={HomesEditContainer} />
        <ProtectedRoute path='/users/:userId/bookings' component={BookingsIndexContainer} />
        <ProtectedRoute path='/users/:userId/homes' component={HomesUserIndexContainer} />
        <ProtectedRoute path='/homes/form' component={HomesFormContainer} />
        <Route path="/homes/:homeId" component={HomesShowContainer} />
        <Route path="/calendar" component={CalendarTest} />
        <Route path="/" component={SearchContainer} />
      </Switch>
    </div>
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
