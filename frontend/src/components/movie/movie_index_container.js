import { connect } from 'react-redux';
import fetchAllMovies from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mstp = state => ({
  movies: state.entities.movies
})

export default connect(mstp, { fetchAllMovies })(MovieIndex);