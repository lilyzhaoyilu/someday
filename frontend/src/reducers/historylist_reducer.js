import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISTORYLISTS
} from '../actions/historylist_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      // console.log(action.historylist.data._id);
      return { ...state, [action.historylist.data._id]: action.historylist.data };
    case RECEIVE_HISTORYLISTS:
      const newState = {}
      console.log("history reducer", action);
      action.historylists.data.forEach(list => newState[list._id] = list)
      return { ...state, ...newState }
    default:
      return state;
  }
}