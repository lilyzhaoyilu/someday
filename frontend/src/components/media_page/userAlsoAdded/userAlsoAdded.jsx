import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class UserAlsoAdded extends Component {

  constructor(props) {
    super(props);
    this.displayUsersAlsoAdded = this.displayUsersAlsoAdded.bind(this);
  }

  componentDidMount() {
    this.props.getHistorylistsBasedOnMovieId(this.props.movieId);
    this.props.getWatchlistsBasedOnMovieId(this.props.movieId);
  }

  displayUsersAlsoAdded() {
    if (this.props.usersAlsoAddedArray) {
      let array = this.props.usersAlsoAddedArray;

      return (

        array.map((list) => {
          let listOnwerId = list.user;
          let listOnwer;
          if (this.props.users[listOnwerId]) {
            listOnwer = this.props.users[listOnwerId].handle
          } else {
            this.props.fetchThisUser(listOnwerId).then(() => (listOnwer = this.props.users[listOnwerId].handle))
          }

          return (<li>{listOnwer} added {this.props.movieTitle} to {(list.name)}</li>)
        })
      )
    }
  }


  render() {

    return (<div className="media-page-user-also-added">

      They also added {this.props.movieTitle} to their lists {this.displayUsersAlsoAdded()}

    </div>)
  }

}


export default UserAlsoAdded;