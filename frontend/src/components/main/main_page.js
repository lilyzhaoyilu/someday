import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NavBarContainer from '../nav/navbar_container'
import MovieIndexContainer from '../movie/movie_index_container'
import { Switch } from 'react-router-dom';
export default () => (
  <div>
    <Switch>
      <AuthRoute path='/' component={NavBarContainer} />
    </Switch>
    <Switch>
      <AuthRoute exact path='/search-result' component={MovieIndexContainer} />
    </Switch>
  </div>
)