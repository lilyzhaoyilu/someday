import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    
  }

  update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}


  handleSubmit(e){
    e.preventDefault();
    // user is taken care of in backend api
    let completeCommentPost = Object.assign({}, this.state, {movie_id: this.props.currentMovieId});
    console.log(completeCommentPost);
    this.props.postComment(completeCommentPost);
    this.setState({
      text: '',
    })
  }



  render() {
    return (
        <form action="">
        <textarea onChange={this.update("text")}></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
     
    )
  }
}
export default CommentForm;