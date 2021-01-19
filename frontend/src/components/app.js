
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom';
import MovieIndexContainer from './movie/movie_index_container';
import ProfileNavbarContainer from './nav/profile_navbar_container';
import NavBarContainer from './nav/navbar_container';
import ProfileShow from './profile/profile_show_container';
import MovieInfinite from './media_index/movie_index_container'
import ShowInfinite from './media_index/show_index_container'
// import NavBarContainer from './nav/navbar_container'
import ProfileShowContainer from './profile/profile_show_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import MoviePageContainer from './splash/splash_media/media_page_cotainer';
import MoviePageContainerLoggedin from './media_page/media_page_cotainer';
import About from './about/about'
const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path='/profile/:userId' component={ProfileNavbarContainer} />
      <ProtectedRoute path='/' component={NavBarContainer} />
    </Switch>
    <Switch>
      <AuthRoute exact path='/splash' component={SplashContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/search-result' component={MovieIndexContainer} />
      <ProtectedRoute exact path='/profile/:userId' component={ProfileShow} />
      <ProtectedRoute exact path='/mediaPage/:movieId' component={MoviePageContainerLoggedin} />
      <AuthRoute exact path='/media_page/:movieId' component={MoviePageContainer} />
      <ProtectedRoute exact path='/show-index' component={ShowInfinite} />
      <ProtectedRoute exact path='/movie-index' component={MovieInfinite} />
      <ProtectedRoute path='/' component={MovieInfinite} />
      <AuthRoute path='/' component={SplashContainer} />
    </Switch>
    <Route path='*' component={About}></Route>
  </div>
)

export default App;