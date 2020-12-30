import React from "react";
import { withRouter, Link } from "react-router-dom";

import SearchBarContainer from "../nav/search_bar/search_bar_container";

import Logo from "../../util/somedaylogo.svg";
import MovieIndex from "../popularMovies/popular_movies_index_container";
import PopularShowsIndex from "../popularShows/popular_shows_index_container";
class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="splash">
        <div className="splash-header">
          <div className="splash-header-left">
            <img src={Logo}></img>
            <SearchBarContainer />
          </div>
          <div className="splash-link">
            {/* <Link to="/">try demo need to do</Link> */}
            <Link id="login" className="splash-link-child" to="login">
              login
            </Link>
            <Link id="signup" className="splash-link-child" to="signup">
              Sign Up
            </Link>
          </div>
        </div>


        <div className="splash-features">
          <div className="splash-features-title">features</div>
          <li>add the shows you love in the list</li>
          <li>search the shows you want to watch</li>
          <li>list of features</li>
          <li>list of features</li>
          <li>list of features</li>
        </div>

				<div className="splash-trending-movies">
					trending movies
					{/* <MovieIndex /> */}
				</div>


        <div className="splash-trending-tvshows">
          trending tv shows
          {/* < PopularShowsIndex /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
