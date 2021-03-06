import React, { Component } from 'react'
import moment from 'moment';
import { Link, withRouter } from "react-router-dom";
class CommentDetailForUser extends Component {

  constructor(props) {
    super(props);
    this.displayMovieImage = this.displayMovieImage.bind(this);
    this.displayCreatedAt = this.displayCreatedAt.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.displayMovieTitle = this.displayMovieTitle.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  displayMovieImage() {
    if(this.props.movies[this.props.comment.movie] && this.props.movies[this.props.comment.movie].image ){
      return <Link to={`/mediapage/${this.props.comment.movie}`}><img src={this.props.movies[this.props.comment.movie].image.url} ></img></Link> 
    }
  }

  displayMovieTitle() {
    if(this.props.movies[this.props.comment.movie]){
      return  <Link className="movie-title" to={`/mediapage/${this.props.comment.movie}`}>{this.props.movies[this.props.comment.movie].title}</Link>
    }
  }

  displayCreatedAt  (time){
    let display = moment(time);
    return <span className="comment-user-time">{display.format("MMM D YYYY")}</span>
  }

  displayUsername  () {
    const userId = this.props.currentPageUserId;
    // debugger;
    if(this.props.users && this.props.users[userId]){
      const displayedName = this.props.users[userId].handle ? this.props.users[userId].handle : this.props.users[userId].email;
      // const displayedName = this.props.users[userId].email;
      return (<Link className="comment-user-username" to={`/profile/${userId}`}>{`${displayedName}`}</Link>)
    }
  }

  handleDeleteComment (e){
    e.preventDefault();
    // debugger;
    this.props.deleteComment(this.props.comment._id)
  }

  

  render() {
    
    const {comment} = this.props;
    // console.log("comment detail for user", comment)
    return (
      
      <li className='comment-user-container'>
        {this.displayMovieImage()}
        <div className="comment-detail-user-right">
          
          <div>
          {this.displayMovieTitle()}
          </div>

          <div className="comment-detail-second">
          {this.displayUsername()}{this.displayCreatedAt(comment.date)}
          </div>

          <div className="comment-detail-text">
            {comment.text}
          </div>

          <div className="comment-button">
            <button className="comment-button-delete" onClick={this.handleDeleteComment}>delete this comment</button>
          </div>
        
        </div>       
      </li>
     
    )
  }
}


export default CommentDetailForUser;