import React, { Component } from 'react';
import CommentDetailForMedia from './comment_detail_for_media/comment_detail_for_media_container';
import CommentForm from '../comment_form/comment_form_container';
class MediaComment extends Component {

  constructor(props){
    super(props);
    this.displayMediaTitle = this.displayMediaTitle.bind(this);
  }

  componentDidMount() {
    this.props.getMovieComments(this.props.currentMovieId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentMovieId !== prevProps.currentMovieId) {
      this.props.getMovieComments(this.props.currentMovieId);
    }
  }

  displayMediaTitle(){
    if (this.props.movies[this.props.currentMovieId]){
      return (this.props.movies[this.props.currentMovieId].title)
    }
  }




  render() {
    const commentsObjects = Object.values(this.props.comments);

    
    let commentUsersSet = new Set();
    commentsObjects.forEach(comment => (commentUsersSet.add(comment.user)))
    const commentUsers = [...commentUsersSet];
    commentUsers.forEach((userId) =>this.props.fetchThisUser(userId))


    return (
      <div className='media-comments'>
        <h3 className='media-comments-title'>{this.displayMediaTitle()}'s Comments ···({commentsObjects.length} comments)</h3>
       {commentsObjects.map(comment => (<CommentDetailForMedia key={comment._id} comment={comment} />))}
       
       <CommentForm title={this.displayMediaTitle()}/>
      </div>
    )
  }
}


export default MediaComment;