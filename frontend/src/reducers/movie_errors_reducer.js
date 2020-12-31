import {
  RECEIVE_A_MOVIE,
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_ERRORS
} from '../actions/movie_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_A_MOVIE:
      return [];
    case RECEIVE_MOVIES:
      return [];
    case RECEIVE_MOVIE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}