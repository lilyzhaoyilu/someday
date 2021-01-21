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
export default () => {
  return (
    <div>
      <main>
        <h1></h1>
        <MovieInfinite />
      </main>
      <aside></aside>
    </div>

  )
}



{/* ///  <CommentForm />  and <UserComment /> should be in movie index, temprorarly here for developing purpose */ }