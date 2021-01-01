import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISOTRYLISTS
} from '../actions/historylist_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      console.log(action.historylist.data._id);
      return { ...state, [action.historylist.data._id]: action.historylist.data };
    case RECEIVE_HISOTRYLISTS:
      newState = {}
      action.historylists.forEach(list => newState[list.id] = list)
      return { ...state, ...newState }
    default:
      return state;
  }
}