import React from 'react';

import Modal from './session/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBarContainer from './nav_bar/search_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './home_container';

import HomesFormContainer from './homes/homes_form_container';
import HomesUserIndexContainer from './homes/homes_user_index_container';
import HomesShowContainer from './homes/homes_show_container';
import HomesEditContainer from './homes/homes_edit_container';

import SearchContainer from './search/search_container';

import BookingsIndexContainer from './bookings/bookings_index_container';
import BookingsEditContainer from './bookings/bookings_edit_container';

import SavedContainer from './saved/saved_container';

import Loading from './loading';
import WorkInProgress from './wip';
// import CalendarTest from './homes/calendar_dates';

import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';

export default () => (
  <div>
    <Modal />
    <header className={'header'}>
      <Switch>
        <Route path="/search/:searchId" component={SearchBarContainer} />
        <Route path="/" component={SearchBarContainer} />
      </Switch>
      <Route path="/" component={NavBarContainer} />
    </header>

    <div className={'main-content'}>
      <Switch>
        <Route path="/search/:searchId" component={SearchContainer} />
        <Route path="/workInProgress" component={WorkInProgress} />
        <Route path="/loading" component={Loading} />
        <Route path="/saved" component={SavedContainer} />
        <ProtectedRoute path='/homes/:homeId/edit' component={HomesEditContainer} />
        <ProtectedRoute path='/bookings/:bookingId/edit' component={BookingsEditContainer} />
        <ProtectedRoute path='/users/:userId/bookings' component={BookingsIndexContainer} />
        <ProtectedRoute path='/users/:userId/homes' component={HomesUserIndexContainer} />
        <ProtectedRoute path='/homes/form' component={HomesFormContainer} />
        <Route path="/homes/:homeId" component={HomesShowContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  </div>
);
