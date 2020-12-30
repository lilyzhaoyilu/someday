import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


  handleSubmit(e){
    e.preventDefault();
    
    this.props.postComment();
  }



  render() {
    return (
        <form action="">
        <textarea>

        </textarea>
        </form>
     
    )
  }
}
export default CommentForm;