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
          // {this.props.movieTitle} 

          return (<li><span>{(list.name)}</span> <Link className="media-page-user-also-added-username" to={`/profile/${listOnwerId}`}>{listOnwer}</Link> </li>)
        })
      )
    }
  }


  render() {

    return (<div className="media-page-user-also-added">

      <div className="media-page-user-also-added-subtitle">{this.props.movieTitle} is also in these lists</div>
      {this.displayUsersAlsoAdded()}

    </div>)
  }

}


export default UserAlsoAdded;