import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MovieIndexItem from './movie_index_item';
import NavBar from '../nav/navbar_container'
import Logo from '../../util/somedaylogo.svg'
import SearchBarContainer from '../nav/search_bar/search_bar_container'

// import MediaComment from '../comments/media_comment/media_comment_container'



export default class MovieIndex extends Component {

  render() {
    const { movies } = this.props;
    if (movies) {
      return (
        <div>
          {(!this.props.loggedIn) ? (<NavBar />) : (
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
          )}
          <ul>
            {movies.map(movie => {
              if (movie.id.slice(0, 2) === 'tt' ) {
                return (
                  <MovieIndexItem
                    key={movie.id}
                    movie={movie}
                    imgUrl={movie.i.imageUrl}
                    name={movie.l}
                    year={movie.y}
                  />
                )
              }
            })}
          </ul>

        </div>
      )

    } else {
      return null;
    }
  }
}
