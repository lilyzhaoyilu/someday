import { connect } from 'react-redux';
import HistorylistItem from './historylist_index_item';
import { showHistorylist } from '../../actions/historylist_actions'
//! using movies to hold both the shows and movies for convenience

const mstp = (state, ownProps) => ({
  historylists: (state.entities.historylists),
  movies: state.entities.movies,
  watched: ownProps.watched
});

const mdtp = dispatch => ({
  showHistorylist: (listId) => dispatch(showHistorylist(listId))
})

export default connect(mstp, mdtp)(HistorylistItem)