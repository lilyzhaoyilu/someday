import React, { Component } from 'react'
import moment from 'moment';

class CommentDetail extends Component {

  

  render() {
    
    const {comment} = this.props;
    const displayCreatedAt = (time) => {
      let display = moment(time);
      return display.format("MMM D YYYY");}



    return (
      
      <li>
        {displayCreatedAt(comment.date)}
        {comment.text} 
        {comment.user}
  
      
      </li>
     
    )
  }
}


export default CommentDetail;