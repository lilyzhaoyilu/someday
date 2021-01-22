// import React, {useEffect,useState} from 'react';

// function MostRecentCommentIndex({ fetchMovieData, comment, idx, movieId }) {

//   const [imgUrl, setImgUrl] = useState("");
//   useEffect(() => {
//     fetchMovieData(movieId).then((res) =>setImgUrl(res.show.data.title.image.url))
//   }, []);

//   return (
//     <div>
//       <img src={imgUrl}></img>
//       <span>{comment.text}</span>
//     </div>
//   );
// }

import React, { Component } from "react";

class MostRecentCommentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
    };
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.props.fetchMovieData(this.props.movieId).then((res) =>
          this.setState({ imgUrl: res.show.data.title.image.url })
        ),
      this.props.idx * 1000
    );
  }
  render() {
    return (
      <div className="recet-item">
        <img src={this.state.imgUrl}></img>
        <div className="recet-text-container">
          <span className="recet-text">{this.props.comment.text}</span>
        </div>
      </div>
    );
  }
}

export default MostRecentCommentIndex;

// export default MostRecentCommentIndex;
