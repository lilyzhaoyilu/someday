import { connect } from 'react-redux';
import { fetchPopularMovies, fetchMovieData } from '../../actions/movie_actions'
import MediaIndex from './show_index_container'
const mSTP = (state, ownProps) => ({
  medias: Object.values(state.entities.movies)
});

const mDTP = (dispatch) => ({
  action: () => dispatch(fetchPopularMovies()),
  fetchMediaData: (movieId) => dispatch(fetchMovieData(movieId))
});

export default connect(mSTP, mDTP)(MediaIndex)