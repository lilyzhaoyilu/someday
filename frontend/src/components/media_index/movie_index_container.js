import { connect } from 'react-redux';
import { fetchPopularMovies, fetchMovieData } from '../../actions/movie_actions'
import MediaIndex from './media_index'
const mSTP = (state, ownProps) => {
  // console.log("movie!");
  return {
    media: Object.values(state.entities.movies),
    title:"trending movies"
  }
};

const mDTP = (dispatch) => ({
  action: () => dispatch(fetchPopularMovies()),
  fetchMediaData: (movieId) => dispatch(fetchMovieData(movieId))
});

export default connect(mSTP, mDTP)(MediaIndex)