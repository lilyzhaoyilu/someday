import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import UserErrorsReducer from './user_errors_reducer';
import CommentErrorsReducer from './comment_errors_reducer';
import MovieErrorsReducer from './movie_errors_reducer';
import WatchlistErrorsReducer from './watchlist_errors_reducer';
import HistorylistErrorsReducer from './historylist_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  user: UserErrorsReducer,
  comment: CommentErrorsReducer,
  movie: MovieErrorsReducer,
  watchlist: WatchlistErrorsReducer,
  historylist: HistorylistErrorsReducer
});
