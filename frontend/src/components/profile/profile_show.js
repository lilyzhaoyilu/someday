import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ProfileNavbar from '../nav/profile_navbar';
import ProfilePageNavbar from '../nav/profile_page_navbar';
import UserCommentContainer from '../comments/user_comment/user_comment_container';
import HistorylistIndexContainer from '../historylist/historylist_index_container';
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';
import moment from 'moment';
class ProfileShow extends Component {

  componentDidMount() {
    this.props.fetchThisUser(this.props.match.params.userId)
  }

  render() {
    const { user } = this.props;
    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM D YYYY");
    }
    return user ? (
      <div>
        <ProfileNavbar />
        <div className="profile-show-wrapper">
          <div className='profile-info'>
            <ProfilePageNavbar />
            {/* <WatchlistIndexContainer userId={user._id} /> */}
            <HistorylistIndexContainer userId={user._id} />
            <h1>My Comments</h1>
            <UserCommentContainer />
          </div>
          <div className="user-info">
            <h1>My Info</h1>
            <div className="username">
              <label>Username:
                <strong>{user.handle}</strong>
              </label>
            </div>
            <div className="email">
              <label>Email:
                <strong>{user.email}</strong>
              </label>
            </div>
            <div className="user-created">
              <label>User Created On:
                <strong>{displayCreatedAt(user.date)}</strong>
              </label>
            </div>
            <div className="about-me">
              <label>About me:
                <p></p>
              </label>
            </div>
            {/* favorite movie added from history list */}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default withRouter(ProfileShow);