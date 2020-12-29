import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom';
export default () => (
  <div>
    <Switch>
      <AuthRoute path='/' component={NavBarContainer} />
    </Switch>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/search-result' component={MovieIndexContainer} />
    </Switch>
  </div>
)