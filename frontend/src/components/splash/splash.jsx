import React from "react";
import { withRouter, Link } from "react-router-dom";

import SearchBarContainer from "../nav/search_bar/search_bar_container";
import Logo from "../../util/somedaylogo.svg";
import MovieIndex from "./splash_movies/popular_movies_index_container";
import PopularShowsIndex from "./splash_shows/popular_shows_index_container";
class Splash extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="splash">
				<div className="splash-header">
					<div className="splash-header-left">
						<Link to='/'>
							<img src={Logo}></img>
						</Link>
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
					<div className="splash-trending-movies">
						<h3 style={{ textAlign: "center" }}>Trending Movies</h3>
						<MovieIndex />
					</div>
				</div>
				{/* <div className="splash-trendings"> */}
					{/* <div className="splash-trending-movies">
						<h3 style={{ textAlign: "center" }}>Trending Movies</h3>
						<MovieIndex />
					</div> */}

					<div className="splash-trending-tvshows">
						<h3 style={{ textAlign: "center" }}>Trending TV Shows</h3>
						<PopularShowsIndex />
					</div>
				{/* </div> */}
				<div className="splash-features-about"></div>
			</div>
		);
	}
}

export default withRouter(Splash);
