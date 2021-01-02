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
  }

  displayMovieImage() {
    if(this.props.movies[this.props.comment.movie]){
      return <Link to={`/mediapage/${this.props.comment.movie}`}><img src={this.props.movies[this.props.comment.movie].image.url} ></img></Link> 
    }
  }

  displayMovieTitle() {
    if(this.props.movies[this.props.comment.movie]){
      return  <Link to={`/mediapage/${this.props.comment.movie}`}>{this.props.movies[this.props.comment.movie].title}</Link>
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
      // const displayedName = this.props.users[userId].email;
      return (<Link to={`/profile/${userId}`}>{`${displayedName} commented on `}</Link>)
    }
  }

  

  render() {
    
    const {comment} = this.props;

    return (
      
      <li className='comment-user-container'>
        {this.displayMovieImage()}
        <div className="comment-detail-user-right">
          <div>
          {this.displayCreatedAt(comment.date)}
          </div>

          <div className="comment-detail-user-subtitle">
          {this.displayUsername()}{this.displayMovieTitle()}
          </div>
          
        {comment.text}
        </div>       
      </li>
     
    )
  }
}


export default CommentDetailForUser;