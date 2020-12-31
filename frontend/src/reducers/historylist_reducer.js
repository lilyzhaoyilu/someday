import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISOTRYLISTS
} from '../actions/historylist_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return { ...state, [action.historylist.id]: action.historylist };
    case RECEIVE_HISOTRYLISTS:
      newState = {}
      action.historylists.forEach(list => newState[list.id] = list)
      return { ...state, ...newState }
    default:
      return state;
  }
}