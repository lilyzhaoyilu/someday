import React, { Component } from 'react'
import moment from 'moment';
import { Link, withRouter } from "react-router-dom";
class CommentDetailForMedia extends Component {

  constructor(props) {
    super(props);
    this.displayCreatedAt = this.displayCreatedAt.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
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
        
  
      
      </li>
     
    )
  }
}


export default CommentDetailForMedia;