import React, { Component } from 'react'
import CommentDetail from '../comment_detail/comment_detail_container'
class MediaComment extends Component {

  componentDidMount() {
    this.props.getMovieComments(this.props.currentMovieId);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
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
      <div className='media-comments'>media comments here
       {commentsObjects.map(comment => (<CommentDetail key={comment._id} comment={comment} />))}
       
      </div>
    )
  }
}


export default MediaComment;