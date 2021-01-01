import React, { Component } from "react";
import Modal from "react-modal";
import MediaComment from '../comments/media_comment/media_comment_container';
import CommentForm from '../comments/comment_form/comment_form_container'

class MediaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: "",
      year: "",
      imgUrl: "",
      author: "",
      rating: null,
      ratingCount: null,
      releaseDate: "",
      tags: [],
      plotOutline: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchMovieData(this.props.movieId).then((result) => {
      this.setState({
        title: result.show.data.title.title,
        year: result.show.data.title.year,
        imgUrl: result.show.data.title.image.url,
        author: result.show.data.plotSummary.author,
        rating: result.show.data.ratings.rating,
        ratingCount: result.show.data.ratings.ratingCount,
        releaseDate: result.show.data.releaseDate,
        tags: result.show.data.genres,
        plotOutline: result.show.data.plotOutline.text,
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.movie_id !== prevProps.movie_id) {
      this.props.fetchMovieData(this.props.movie_id).then((result) => {
        this.setState({
          title: result.show.data.title.title,
          year: result.show.data.title.year,
          imgUrl: result.show.data.title.image.url,
          author: result.show.data.plotSummary.author,
          rating: result.show.data.ratings.rating,
          ratingCount: result.show.data.ratings.ratingCount,
          releaseDate: result.show.data.releaseDate,
          tags: result.show.data.genres,
          plotOutline: result.show.data.plotOutline.text,
        });
      });
    }
  }

  toggleModal(e){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const ratingCount = this.state.ratingCount
      ? this.state.ratingCount.toLocaleString("en-US")
      : this.state.ratingCount;
    return (
      <section className="wrapper">
        <div className="content">
          <h1>
            <span>{this.state.title}</span>
            <span>{`(${this.state.year})`}</span>
          </h1>
          <div className="sub-wrapper">
            <div className="details">
              <img src={this.state.imgUrl} />
              <div className="info">
                <span>Author: {this.state.author}</span>
                <span>
                  Genres:{" "}
                  {this.state.tags.map((tag, idx) => (
                    <span className="tag-arr" key={idx}>
                      {tag}
                    </span>
                  ))}
                </span>
                <span>Release Date: {this.state.releaseDate}</span>
              </div>
              <div className="ratings">
                <span>Rating: {this.state.rating}</span>
                <span>{ratingCount} people rated</span>
              </div>
            </div>
          </div>
          <div className="plot">
            <h3>Plot Summary</h3>
            <span>{this.state.plotOutline}</span>
          </div>
        </div>

        <div className="media-button">
          <button onClick={this.toggleModal}>Add to TodoList</button>
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.toggleModal}
            contentLabel="My Todo List"
            className="list-modal"
            overlayClassName="list-overlay "
            closeTimeoutMS={500}
            ariaHideApp={false}
          >
            <div>My Todo Lists.</div>
            <button onClick={this.toggleModal}>Close modal</button>
          </Modal>
          <button onClick={this.toggleModal}>Add to WatchedList</button>
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.toggleModal}
            contentLabel="My Watch List"
            className="list-modal"
            overlayClassName="list-overlay "
            closeTimeoutMS={500}
            ariaHideApp={false}
          >
            <div>My Watch Lists.</div>
            <button onClick={this.toggleModal}>Close modal</button>
          </Modal>
        </div>
         <MediaComment />
          <CommentForm />
      </section>
    );
  }
}

export default MediaPage;
