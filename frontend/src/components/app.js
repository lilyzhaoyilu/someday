import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container'

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MovieIndexContainer from './movie/movie_index_container'
import SplashContainer from './splash/splash_container'

const App = () => (
  <div>

    <Switch>
      <AuthRoute path='/' component={SplashContainer} />
      <ProtectedRoute path='/' component={MainPage} />
    </Switch>
  </div>
)
export default App