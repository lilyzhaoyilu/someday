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
    
  

    const CommentsObjects = Object.values(this.props.comments);

    return (
      <div className='media-comments'>media comments here
       {CommentsObjects.map(comment => (<CommentDetail key={comment._id} comment={comment} />))}
      </div>
    )
  }
}


export default MediaComment;