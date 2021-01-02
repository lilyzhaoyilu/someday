import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions';
import IndexItem from './popular_movies_index_item';

const mstp = (state, ownProps) => {
  return {
    show: state.entities.movies[ownProps.showId],
    showId: ownProps.showId,
    index: ownProps.idx
  }
};

const mdtp = dispatch => ({
  fetchMovieData: (showId) => dispatch(fetchMovieData(showId))
});

export default connect(mstp, mdtp)(IndexItem)