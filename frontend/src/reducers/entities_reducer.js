import { combineReducers } from 'redux';
import UsersReducer from './users_reducer'
import MoviesReducer from './movies_reducer'
import WatchlistsReducer from './watchlists_reducer'
import HistorylistsReducer from './historylist_reducer'
import CommentsReducer from './comments_reducer'

export default combineReducers({
  users: UsersReducer,
  movies: MoviesReducer,
  watchlists: WatchlistsReducer,
  historylists: HistorylistsReducer,
  comments: CommentsReducer
});
