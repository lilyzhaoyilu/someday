import React, { Component } from 'react'
import moment from 'moment';
import { Link, withRouter } from "react-router-dom";
class CommentDetailForMedia extends Component {

  constructor(props) {
    super(props);
    this.displayCreatedAt = this.displayCreatedAt.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  displayUsername = () => {
    const userId = this.props.comment.user;
    
    if(userId && this.props.users[userId]){
      const displayedName = this.props.users[userId].handle ? this.props.users[userId].handle : this.props.users[userId].email;
      // const displayedName = this.props.users[userId].email;
      return (<Link className="media-comment-user" to={`/profile/${userId}`}>{`${displayedName}`}</Link>)
    }
  }

  displayCreatedAt = (time) => {
    let display = moment(time);
    return <span className="media-comment-time">{display.format("MMM D YYYY")}</span>;
  }

  
  handleDeleteComment (e){
    e.preventDefault();
    // debugger;
    let movieId = this.props.comment.movie;
    this.props.deleteComment(this.props.comment._id)
    // .then((movieId) => {this.props.getMovieComments(movieId)})
  }

  displayDeleteButton(e){
    if(this.props.comment.user === this.props.currentUserId){
      return (    <div className="comment-button">
      <button className="comment-button-delete" onClick={this.handleDeleteComment}>delete this comment</button>
    </div>)
    }
  }


  render() {
    
    const {comment} = this.props;
    // const displayCreatedAt = (time) => {
    //   let display = moment(time);
    //   return display.format("MMM D YYYY");}

    // const userId = comment.user
    // const displayUsername = () => {
    //   if(this.props.users && this.props.users[userId]){
    //     return (<Link to={`/profile/${userId}`}>{this.props.users[userId].email}</Link>)
    //   }
    // }


    return (
      
      <li>
        <div className="media-comment-subtitle">
        {this.displayUsername()}
        {this.displayCreatedAt(comment.date)}
        </div>

        <div>{comment.text}</div>
    
        {this.displayDeleteButton()}
  
      
      </li>
     
    )
  }
}


export default CommentDetailForMedia;