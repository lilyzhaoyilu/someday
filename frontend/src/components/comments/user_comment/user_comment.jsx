import React, { Component } from 'react'
import CommentDetailForUser from './comment_detail_for_user/comment_detail_for_user_container'
class UserComment extends Component {

  constructor(props) {
    super(props);
    this.displayUsername = this.displayUsername.bind(this);
    this.displayCommentNumber = this.displayCommentNumber.bind(this);
  }

  componentDidMount() {
    this.props.getUserComments(this.props.currentPageUserId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPageUserId !== prevProps.currentPageUserId) {
      this.props.getUserComments(this.props.currentPageUserId);
    }
  }

  displayUsername(){
    if (this.props.currentPageUserId === this.props.currentUserId){
      return <span>My comments</span>
    }else{
      const userName = this.props.users[this.props.currentPageUserId].email
      return <span>{userName}'s comments</span>
    }
  }

  displayCommentNumber(){
    const commnetNumber = Object.values(this.props.comments).length;
    if(commnetNumber === 1){
      return <span>1 comment</span>
    }else if(commnetNumber === 1){
      return <span>0 comment</span>
    }
    else{
      return <span>{`${commnetNumber} comments`}</span>
    }
  }

  render() {
    
    const commentsObjects = Object.values(this.props.comments);

    let commentMoviesSet = new Set();
    commentsObjects.forEach(comment => (commentMoviesSet.add(comment.movie)))
    const commentMovies = [...commentMoviesSet];
    commentMovies.forEach((movieId) =>this.props.fetchMovieData(movieId))


    return (
      <div className='user-comment'>
      <h3>{this.displayUsername()} ···({this.displayCommentNumber()})</h3>

      {commentsObjects.map(comment => (<CommentDetailForUser key={comment._id} comment={comment}/>))}

      </div>
    )
  }
}


export default UserComment;