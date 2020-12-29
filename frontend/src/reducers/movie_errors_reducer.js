import {
  RECEIVE_A_SHOW,
  RECEIVE_SHOWS,
  RECEIVE_SHOW_ERRORS
} from '../actions/movie_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_A_SHOW:
      return [];
    case RECEIVE_SHOWS:
      return [];
    case RECEIVE_SHOW_ERRORS:
      return action.errors;
    default:
      return state;
  }
}