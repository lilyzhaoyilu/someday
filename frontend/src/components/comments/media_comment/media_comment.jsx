import React, { Component } from 'react'
import moment from 'moment';
import CommentDetail from '../comment_detail/comment_detail_container'
class MediaComment extends Component {

  componentDidMount() {
    this.props.getUserComments(this.props.currentUserId);
  }

  render() {
    
  

    const CommentsObjects = Object.values(this.props.comments);

    return (
      <div className='user'>usercomments here
       {CommentsObjects.map(comment => (<CommentDetail key={comment._id} comment={comment} />))}
      </div>
    )
  }
}


export default MediaComment;