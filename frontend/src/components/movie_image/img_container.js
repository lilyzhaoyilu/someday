import { connect } from 'react-redux';

import MovieImage from './movie_img';

const mstp = (state, ownProps) => ({
    movieId: ownProps.movieId
})

const mdtp = dispatch => ({
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId))
})

export default connect(mstp, mdtp)(MovieImage)