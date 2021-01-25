import { connect } from 'react-redux';
import { clearMovies } from '../../actions/movie_actions';
import { fetchAllUsers, clearUsers } from '../../actions/user_actions'
import MovieIndex from './movie_index';

const mstp = (state, ownProps) => {
  // console.log(ownProps.history);
  return {
    movies: Object.values(state.entities.movies),
    loggedIn: state.session.isAuthenticated

  }
}
const mdtp = dispatch => ({
  // fetchAllShows: dispatch(fetchAllShows)
  clearMovies: () => dispatch(clearMovies()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  clearUsers: () => dispatch(clearUsers())
})

export default connect(mstp, mdtp)(MovieIndex);