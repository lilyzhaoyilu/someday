import React, { Component } from 'react'
import moment from 'moment';
import { Link, withRouter } from "react-router-dom";
class CommentDetailForUser extends Component {

  constructor(props) {
    super(props);
    this.displayMovieImage = this.displayMovieImage.bind(this);
    this.displayCreatedAt = this.displayCreatedAt.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
  }

  displayMovieImage() {
    if(this.props.movies[this.props.comment.movie]){
      return this.props.movies[this.props.comment.movie].image.url
    }
  }

  displayCreatedAt = (time) => {
    let display = moment(time);
    return display.format("MMM D YYYY");
  }

  displayUsername = () => {
    const userId = this.props.currentPageUserId;
    // debugger;
    if(this.props.users && this.props.users[userId]){
      const displayedName = this.props.users[userId].handle ? this.props.users[userId].handle : this.props.users[userId].email;
      // console.log(displayedName);
      // const displayedName = this.props.users[userId].email;
      return (<Link to={`/profile/${userId}`}>{ displayedName}</Link>)
    }
  }

  

  render() {
    
    const {comment} = this.props;

    return (
      
      <li>
        <img src={this.displayMovieImage()} width="50px"></img>
        {this.displayUsername()}
        {this.displayCreatedAt(comment.date)}
        {comment.text} 
        
      
      </li>
     
    )
  }
}


export default CommentDetailForUser;