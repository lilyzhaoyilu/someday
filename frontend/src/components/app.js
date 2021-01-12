import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import MovieIndexContainer from './movie/movie_index_container';

// import NavBarContainer from './nav/navbar_container'
import ProfileShowContainer from './profile/profile_show_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import MoviePageContainer from './splash/splash_media/media_page_cotainer';
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/splash' component={SplashContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/search-result' component={MovieIndexContainer} />
      <AuthRoute exact path='/media_page/:movieId' component={MoviePageContainer} />
      {/* <Route exact path='/profile/:userId' component={ProfileShowContainer}/>
      <Route exact path= '/mediaPage/:movieId' component={MoviePageContainer} /> */}

      <ProtectedRoute path='/' component={MainPage} />
    </Switch>
  </div>
);

export default App;
