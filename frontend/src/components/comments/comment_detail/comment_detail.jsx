import React, { Component } from 'react'
import moment from 'moment';

class CommentDetail extends Component {

  // componentDidMount(){
  //   this.props.fetchThisUser(this.props.comment.user)
  // }
  

  render() {
    
    const {comment} = this.props;
    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM D YYYY");}

    const userId = comment.user
    const displayUsername = () => {
      if(this.props.users && this.props.users[userId]){
        return this.props.users[userId].email
      }
    }


    return (
      
      <li>
        {displayCreatedAt(comment.date)}
        {comment.text} 
        {displayUsername()}
  
      
      </li>
     
    )
  }
}


export default CommentDetail;