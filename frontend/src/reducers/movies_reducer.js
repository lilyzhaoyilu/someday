import { RECEIVE_A_MOVIE } from '../actions/movie_actions';

export default function(oldState={}, action) {
  Object.freeze(oldState);

  switch (action.type){
    case RECEIVE_A_MOVIE:
      return {
        ...oldState,
        [action.movie.id]: action.movie
      }
    default:
      return oldState
  }
}