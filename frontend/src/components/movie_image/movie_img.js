import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            imgUrl: ""
        };
    }
    componentDidMount() {
        this.props.fetchMovieData(this.props.movieId).then((result) => {
          setTimeout(() => this.setState({ 
              title: result.show.data.title.title,
              imgUrl: result.show.data.title.image.url}),5000)
            // this.setState({ imgUrl: result.show.data.title.image.url})
        })
    }
    
    componentDidUpdate(prevProps) {
      if(this.props.movieId !== prevProps.movieId){
        this.props.fetchMovieData(this.props.movieId).then(result => {
          setTimeout(() => this.setState({
            title: result.show.data.title.title,
            imgUrl: result.show.data.title.image.url}), 5000)
        })
      }
    }
    
    render() { 
        const { movieId } = this.props;
        return (
            <div>
              <h3>{this.state.title}</h3>
              <Link to={`/mediaPage/${movieId}`}>
                <img src={this.state.imgUrl} height='100' width='auto'/>
              </Link>
            </div>
        );
    }
}

export default MovieImage;