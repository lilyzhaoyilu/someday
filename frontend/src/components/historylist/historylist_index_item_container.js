import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions';
import HistorylistItem from './historylist_index_item';

//! using movies to hold both the shows and movies for convenience

const mstp = (state, ownProps) => ({
  historylists: Object.values(state.entities.historylists),
  movies: state.entities.movies,
  watched: ownProps.watched
});

const mdtp = dispatch => ({
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId))
});

export default connect(mstp, mdtp)(HistorylistItem)