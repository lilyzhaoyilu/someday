import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.displayCategory = this.displayCategory.bind(this);
    
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
    this.props.postComment(completeCommentPost).then(() => {
      this.setState({
        text: '',
      })
    });
    
  }

  // displayCategory(){

  // }



  render() {
    return (
      <div className="comment-form">
        {/* <div className="comment-form-title"><h3>Write comments for {this.props.title}</h3></div> */}
        <h3>Write comments for {this.props.title}</h3>
        <form action="">
        <textarea onChange={this.update("text")} value={this.state.text} ></textarea>
        
        <button disabled={this.state.text.length<1} className="comment-form-submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default CommentForm;
