import {RECEIVE_LISTS_AS_ARRAY} from '../actions/historylist_actions';
import {RECEIVE_LISTS_AS_ARRAYW} from '../actions/watchlist_actions';
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

export default (state = {}, action) => {
  switch (action.type) {
 
    case RECEIVE_LISTS_AS_ARRAY:
      const newState = {};
      // console.log("hehehehe",action)
      action.lists.forEach((list) => (newState[list._id] = list));
      return { ...state, ...newState };
    case RECEIVE_LISTS_AS_ARRAYW:
      // console.log("fire")
      const newState2 = {};
      // console.log("2222",action.lists)
      action.lists.data.forEach((list) => (newState2[list._id] = list));
      return { ...state, ...newState2 };
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
}