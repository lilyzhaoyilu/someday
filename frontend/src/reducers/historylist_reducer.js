import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISTORYLISTS,
  DELETE_HISTORYLIST
} from '../actions/historylist_actinos'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return { ...state, [action.historylist.id]: action.historylist };
    case RECEIVE_HISTORYLISTS:
      const newState = {}
      action.historylists.forEach(historylist => newState[historylist.id] = historylist)
      return { ...state, ...newState }
    case DELETE_HISTORYLIST:
      return { ...state, [action.listId]: undefined };
    default:
      return state;
  }
}