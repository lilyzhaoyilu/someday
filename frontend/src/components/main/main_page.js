import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from "react-router-dom";
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';
import NavBarContainer from '../nav/navbar_container';
import MovieIndexContainer from '../movie/movie_index_container';
import { Switch, Route } from 'react-router-dom';
// import CommentForm from '../comments/comment_form/comment_form_container';
import UserComment from '../comments/user_comment/user_comment_container';
import HistorylistPostForm from "../list_form/historylist_form_container";
import WatchlistPostForm from '../list_form/watchlist_form_container';
import ProfileShow from '../profile/profile_show_container';
import MovieInfinite from '../media_index/movie_index_container'
import ShowInfinite from '../media_index/show_index_container'
// import ProfileShowContainer from '../profile/profile_show_container';
import ProfileNavbarContainer from '../nav/profile_navbar_container';
import MoviePageContainer from '../media_page/media_page_cotainer';
export default () => {
  return (

    <Route>
      <Switch>
        <Route exact path='/profile/:userId' component={ProfileNavbarContainer} />
        <Route path='/' component={NavBarContainer} />
      </Switch>
      <Switch>
        <ProtectedRoute path='/profile/:userId' component={ProfileShow} />
        <Route exact path='/mediaPage/:movieId' component={MoviePageContainer} />
      </Switch>
      <ProtectedRoute path='/show-index' component={ShowInfinite} />
      <ProtectedRoute path='/movie-index' component={MovieInfinite} />

    </Route>

  )
}



{/* ///  <CommentForm />  and <UserComment /> should be in movie index, temprorarly here for developing purpose */ }