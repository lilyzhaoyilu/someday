import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from '../../util/somedaylogo.svg';
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
          <input type="text" placeholder="search"></input>
          </div>
          <div className="splash-header-right">
          <span>try demo</span> 
          <Link to="login">login</Link>
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
        </div>

        <div className="splash-trending-tvshows">
          trending tv shows
        </div>
			</div>
		);
	}
}

export default withRouter(Splash);
