import React, { Component } from 'react'
import CommentDetailForUser from './comment_detail_for_user/comment_detail_for_user_container'
class UserComment extends Component {

  constructor(props) {
    super(props);
    this.displayUsername = this.displayUsername.bind(this);
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

  // fetchMoviesInfo(){
  //   const CommentsObjects = Object.values(this.props.comments);


  // }

  render() {
    
  

    const commentsObjects = Object.values(this.props.comments);

    let commentMoviesSet = new Set();
    commentsObjects.forEach(comment => (commentMoviesSet.add(comment.movie)))
    const commentMovies = [...commentMoviesSet];
    commentMovies.forEach((movieId) =>this.props.fetchMovieData(movieId))


    return (
      <div className='user-comments'>{this.displayUsername()}
       {commentsObjects.map(comment => (<CommentDetailForUser key={comment._id} comment={comment} />))}
      </div>
    )
  }
}


export default UserComment;