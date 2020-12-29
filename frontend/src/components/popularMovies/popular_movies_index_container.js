import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../actions/movie_actions';
import PopularMoviesIndex from './popular_movies_index';

const mstp = state => ({
  movies: Object.values(state.entities.movies)
});

const mdtp = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies())
});

export default connect(mstp, mdtp)(PopularMoviesIndex)