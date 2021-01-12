import {
  RECEIVE_HISTORYLIST,
  RECEIVE_HISTORYLISTS
} from '../actions/historylist_actions'
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HISTORYLIST:
      return {
        ...state,
        [action.historylist.data._id]: action.historylist.data,
      };
    case RECEIVE_HISTORYLISTS:
      const newState = {};
      action.historylists.data.forEach((list) => (newState[list._id] = list));
      return { ...state, ...newState };
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}