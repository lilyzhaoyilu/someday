import { connect } from 'react-redux';
import HistorylistItem from './historylist_index_item';

//! using movies to hold both the shows and movies for convenience

const mstp = (state, ownProps) => ({
  historylists: Object.values(state.entities.historylists),
  movies: state.entities.movies,
  watched: ownProps.watched
});

export default connect(mstp)(HistorylistItem)