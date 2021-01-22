import { RECEIVE_A_MOVIE, RECEIVE_MOVIES, RECEIVE_POPULAR_MOVIES, CLEAR_MOVIES } from '../actions/movie_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_A_MOVIE:
      const newShow = action.show.data.title
      return {
        ...oldState,
        [action.show.data.id.split('/')[2]]: { ...newShow, id: newShow.id.split('/')[2] }
      }

    case RECEIVE_POPULAR_MOVIES:
      newState = {};
      action.shows.data.forEach(show => {
        const showId = show.split('/')[2]
        newState[showId] = { id: showId }
      });
      return { ...oldState, ...newState }
    case RECEIVE_MOVIES:
      if (action.shows.data.hasOwnProperty("d")) {
        newState = {};
        action.shows.data.d.forEach(show => newState[show.id] = show)
        return { ...oldState, ...newState }
      } else {
        return oldState;
      }
      // console.log(action)
      // return oldState
    case CLEAR_MOVIES:
      return {};
    default:
      return oldState
  }
}