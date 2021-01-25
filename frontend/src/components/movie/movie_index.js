import React, { Component } from "react";
import { Link } from "react-router-dom";

import MovieIndexItem from "./movie_index_item";
import NavBar from "../nav/navbar_container";
import Logo from "../../util/somedaylogo.svg";
import SearchBarContainer from "../nav/search_bar/search_bar_container";
import UserSearchIndexContainer from '../search_result/user_search_index_container';

// import MediaComment from '../comments/media_comment/media_comment_container'

export default class MovieIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], input: this.props.history.location.state }
  }
  // componentDidUpdate(prevState) {
  //   if (prevState !== this.nextState) {
  //     setState
  //   }
  // }

  componentDidMount() {
    this.props.fetchAllUsers().then(res => {
      this.setState({ users: res.users.data.filter(user => user.handle.includes(this.props.history.location.state.detail.toLowerCase())) })
      console.log(this.state.users.length)
    })

  }

  componentDidUpdate(prevProps) {
    console.log("state", this.state)
    console.log("pre", prevProps.history.location.state.detail)
    if (prevProps.history.location.state.detail !== this.state.detail) {
      this.setState({ detail: prevProps.history.location.state.detail })
      this.props.fetchAllUsers().then(res => {
        this.setState({ users: res.users.data.filter(user => user.handle.includes(prevProps.history.location.state.detail.toLowerCase())) })
        console.log(res.users.data)
      })

    }

  }

  componentWillUnmount() {
    this.props.clearMovies();
    this.props.clearUsers();
    this.setState({ users: [] })
  }

  render() {
    const { movies } = this.props;
    if (movies.length !== 0 && this.state.users.length !== 0) {
      return (
        <div>
          {this.props.loggedIn ? null : (
            <div className="splash-header">
              <div className="splash-header-left">
                <Link to="/splash">
                  <img src={Logo}></img>
                </Link>
                <SearchBarContainer />
              </div>
              <div className="splash-link">
                {/* <Link to="/">try demo need to do</Link> */}
                <Link id="login" className="splash-link-child" to="/login">
                  login
                </Link>
                <Link id="signup" className="splash-link-child" to="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
          { movies.length === 0 ? null : <h1 className="movie-idx-header">Movies and TV-Shows</h1>}
          <ul className="search-result">
            {movies.map((movie) => {
              if (movie.id.slice(0, 2) === "tt" && movie.i) {
                return (
                  <MovieIndexItem
                    key={movie.id}
                    movie={movie}
                    imgUrl={movie.i.imageUrl}
                    name={movie.l}
                    year={movie.y}
                    loggedIn={this.props.loggedIn}
                  />
                );
              }
            })}
          </ul>
          <UserSearchIndexContainer users={this.state.users} />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.loggedIn ? null : (
            <div className="splash-header">
              <div className="splash-header-left">
                <Link to="/splash">
                  <img src={Logo}></img>
                </Link>
                <SearchBarContainer />
              </div>
              <div className="splash-link">
                {/* <Link to="/">try demo need to do</Link> */}
                <Link id="login" className="splash-link-child" to="/login">
                  login
                </Link>
                <Link id="signup" className="splash-link-child" to="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
          <div className="only-users">

            <div className="no-result">
              <div className="no-result-text">No Matching result, Click me to browse</div>
              <Link to="/show-index" className="no-result-link">
                <div className="sign-search">
                  <span className="fast-flicker">S</span>ome
                <span className="flicker">d</span>ay
              </div>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }
}
