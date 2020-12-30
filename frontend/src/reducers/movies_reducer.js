import { RECEIVE_A_SHOW, RECEIVE_SHOWS, RECEIVE_POPULAR_SHOWS } from '../actions/movie_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_A_SHOW:
      return {
        ...oldState,
        [action.movie.id]: action.movie
      }

    case RECEIVE_POPULAR_SHOWS:
      newState = {};
      action.shows.data.slice(0, 8).forEach(show => {
        const showId = show.split('/')[2]
        newState[showId] = { id: showId }
      });
      return { ...oldState, ...newState }
    case RECEIVE_SHOWS:
      newState = {};
      action.shows.data.d.forEach(show => newState[show.id] = show)
      return { ...oldState, ...newState }
    default:
      return oldState
  }
}