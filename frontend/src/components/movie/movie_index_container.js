import { connect } from 'react-redux';
import { fetchAllShows } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mstp = state => ({
  movies: Object.values(state.entities.movies)
})
const mdtp = dispatch => ({
  fetchAllShows: dispatch(fetchAllShows)
})

export default connect(mstp, mdtp)(MovieIndex);