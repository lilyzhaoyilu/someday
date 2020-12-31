import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';
// import ProfileShowContainer from '../profile/profile_show_container';
import NavBarContainer from '../nav/navbar_container'
import MovieIndexContainer from '../movie/movie_index_container'
import { Switch, Route } from 'react-router-dom';
export default () => {
  console.log('mainpage');
  return (
    <div>
      <Switch>
        <Route path='/' component={NavBarContainer} />
      </Switch>
      <Switch>
        <ProtectedRoute path='/' exact path='/search-result' component={MovieIndexContainer} />
      </Switch>
    </div>
  )
}
