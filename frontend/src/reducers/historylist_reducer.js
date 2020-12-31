import {
  RECEIVE_HISTORYLIST
} from '../actions/historylist_actinos'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return { ...state, [action.historylist.id]: action.historylist };
    default:
      return state;
  }
}