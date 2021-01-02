import React, { Component } from 'react';
import CommentDetailForMedia from './comment_detail_for_media/comment_detail_for_media_container';
class MediaComment extends Component {

  componentDidMount() {
    this.props.getMovieComments(this.props.currentMovieId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentMovieId !== prevProps.currentMovieId) {
      this.props.getMovieComments(this.props.currentMovieId);
    }
  }




  render() {
    const commentsObjects = Object.values(this.props.comments);

    
    let commentUsersSet = new Set();
    commentsObjects.forEach(comment => (commentUsersSet.add(comment.user)))
    const commentUsers = [...commentUsersSet];
    commentUsers.forEach((userId) =>this.props.fetchThisUser(userId))


    return (
      <div className='media-comments'>Comments ···({commentsObjects.length} comments)
       {commentsObjects.map(comment => (<CommentDetailForMedia key={comment._id} comment={comment} />))}
       
      </div>
    )
  }
}


export default MediaComment;