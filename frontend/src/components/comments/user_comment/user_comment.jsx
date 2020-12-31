import React, { Component } from 'react'
import moment from 'moment';

class UserComment extends Component {

  componentDidMount() {
    this.props.getUserComments(this.props.currentUserId);
  }

  render() {
    
  

    const CommentsObjects = Object.values(this.props.comments);

    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM D YYYY hh:mm a");}


    return (
      <div>usercomments
       {CommentsObjects.map(comment => (<li key={`comment-${comment._id}`}>{comment.text} {displayCreatedAt(comment.date)}</li>))}
      </div>
    )
  }
}


export default UserComment;