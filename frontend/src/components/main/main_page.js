import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from "react-router-dom";
import NavBarContainer from '../nav/navbar_container';
import { Switch, Route } from 'react-router-dom';
import ProfileShow from '../profile/profile_show_container';
import MovieInfinite from '../media_index/movie_index_container'
import ShowInfinite from '../media_index/show_index_container'
import ProfileNavbarContainer from '../nav/profile_navbar_container';
import MoviePageContainer from '../media_page/media_page_cotainer';
import NewUserIndex from "./new_user_index/new_user_index_container"
import MostRecentComment from './most_recent_comment/most_recent_comment_container';
import MostCommentUsers from './most_comment_users/most_comment_users_container'
export default () => {
  return (
    <div className="main-container">
      <main>
        <MovieInfinite />
        <MostRecentComment />
      </main>
      <aside>
        <NewUserIndex />
        <MostCommentUsers />
      </aside>

    </div>

  )
}



{/* ///  <CommentForm />  and <UserComment /> should be in movie index, temprorarly here for developing purpose */ }