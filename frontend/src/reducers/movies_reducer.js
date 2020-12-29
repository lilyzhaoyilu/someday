import { RECEIVE_A_SHOW, RECEIVE_SHOWS } from '../actions/movie_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_A_SHOW:
      return {
        ...oldState,
        [action.movie.id]: action.movie
      }
    case RECEIVE_SHOWS:
      const newState = {};
      action.shows.data.d.forEach(show => newState[show.id] = show)
      console.log(newState);
      return { ...oldState, ...newState }
    default:
      return oldState
  }
}