import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISTORYLISTS
} from '../actions/historylist_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return { ...state, [action.historylist.data._id]: action.historylist.data };
    case RECEIVE_HISTORYLISTS:
      const newState = {}
      action.historylists.data.forEach(list => newState[list._id] = list)
      return { ...state, ...newState }
    default:
      return state;
  }
}