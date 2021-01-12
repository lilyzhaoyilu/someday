import React from "react";
import { Link, withRouter } from "react-router-dom";
import DemoButtonContainer from "../session/demo_button/demo_button_container";
import MyProfileContainer from "./my_profile/my_profile_container";
import SearchBarContainer from "./search_bar/search_bar_container";
import Logo from "../../util/somedaylogo.svg";
import { RiLogoutBoxRLine } from "react-icons/ri";
class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId);
    this.props.showMyHistorylists(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.props.getMyWatchlists(this.props.userId);
      this.props.showMyHistorylists(this.props.userId);
    }
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className="navbar">
        <Link className="navbar-logo" to="/splash">
          <img src={Logo}></img>
        </Link>

        <MyProfileContainer />

        <Link to="/show-index">Shows</Link>
        <Link to="/movie-index">Movies</Link>
        <SearchBarContainer />
        <div className="user-dropdown">
          <span className="user-dropdown-header">Account</span>
          <div className="user-dropdown-content">
            <header>{this.props.currentUser}</header>
            <div className="all-list">
              <div className="todoLists">
                <div className="list">
                  {Object.values(this.props.watchlists).length}
                </div>
                <span>Todo List</span>
              </div>
              <div className="watchLists">
                <div className="list">
                  {Object.values(this.props.historylists).length}
                </div>
                <span>Watch List</span>
              </div>
            </div>
            <div className="logout-button" onClick={this.logoutUser}>
              <RiLogoutBoxRLine className="logout-icon" />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
