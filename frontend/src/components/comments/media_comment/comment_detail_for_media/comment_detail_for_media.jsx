import React, { Component } from 'react'
import moment from 'moment';
import { Link, withRouter } from "react-router-dom";
import { RIETextArea } from "riek";
import {FiEdit3, FiTrash2} from 'react-icons/fi';

class CommentDetailForMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment.text,
      // isDisabled: false,
    }
    this.displayCreatedAt = this.displayCreatedAt.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleSubmitEditedComment = this.handleSubmitEditedComment.bind(this);
    this.displayEdit = this.displayEdit.bind(this);
    this.commentEditLengthValidation = this.commentEditLengthValidation.bind(this);
    // this.handleClickEditButton = this.handleClickEditButton.bind(this);
    // this.displayEditComment = this.displayEditComment.bind(this);
  }

  displayUsername () {
    const userId = this.props.comment.user;
    if(userId && this.props.users[userId]){
      const displayedName = this.props.users[userId].handle ? this.props.users[userId].handle : this.props.users[userId].email;
      // const displayedName = this.props.users[userId].email;
      return (<Link className="media-comment-user" to={`/profile/${userId}`}>{`${displayedName}`}</Link>)
    }
  }

  displayCreatedAt(time)  {
    let display = moment(time);
    return <span className="media-comment-time">{display.format("MMM D YYYY")}</span>;
  }

  
  handleDeleteComment(e){
    e.preventDefault();
    // debugger;
    // let movieId = this.props.comment.movie;
    this.props.deleteComment(this.props.comment._id)
    // .then((movieId) => {this.props.getMovieComments(movieId)})
  }

  displayDeleteButton(e){
    if(this.props.comment.user === this.props.currentUserId){
      return (
      <div className="comment-button">
      <button className="comment-button-delete" onClick={this.handleDeleteComment}><FiTrash2 /></button>
      </div>
    )
    }
  }

  commentEditLengthValidation(string){
    // console.log(string);
    return (string.length > 1 && string.length < 144)
  }

  // displayEditComment(text){
  //   console.log("text",text)
  //   if(text.length < 144){
  //     this.setState({comment: text})
  //   }
  // }

  displayEdit(e){
    // console.log(this.state.comment)
    if(this.props.comment.user === this.props.currentUserId){




      return (
        <div className="media-comments-detail-container">
          <RIETextArea value={this.state.comment}
          classEditing='media-comments-detail-edit'
          propName="text"
          change={this.handleSubmitEditedComment}
          validate={this.commentEditLengthValidation}
          // editProps={maxLength="144"}
          />

          

          {/* <FiEdit3 /> */}
          {/* <button onClick={this.handleClickEditButton}></button> */}
        </div>
    )
    }else{
       return <div>{this.props.comment.text}</div>
    }
  }

  // handleClickEditButton(){
  //   let editEletment = document.getElementById("media-comments-detail");
  //   editEletment.classList.remove("media-comments-detail-container");
  //   editEletment.classList.add("media-comments-detail-edit");
  // }


  handleSubmitEditedComment(commentObj) {
    // console.log('cccccccc ' + commentObj);
    // console.log(this.props.comment);
    this.props.patchComment(this.props.comment._id, commentObj)
  }

  render() {
    
    const {comment} = this.props;


    return (
      
      <li>
        <div className="media-comment-subtitle">
        {this.displayUsername()}
        {this.displayCreatedAt(comment.date)}
        </div>

        {this.displayEdit()}

    
    
        {this.displayDeleteButton()}
  
      
      </li>
     
    )
  }
}


export default CommentDetailForMedia;