import React, {useState, useEffect} from 'react';
import MostRecentCommentIndex from './most_recent_comment_index_cotainer'
function MostRecentComment({comments,getAllComments}) {
  
  useEffect(() => {
      getAllComments();
  },[]);

  return (
    <div className= "recent-comments">
      {console.log("comments", comments)}
      <span className="recent-comment-header">Most Recent Comments</span>
      <ul>
        {comments.slice(0,6).map((comment, idx) => (
          <MostRecentCommentIndex key={comment._id} comment={comment} idx= {idx}/>
        ))}
      </ul>
    </div>
  );

}

export default MostRecentComment;