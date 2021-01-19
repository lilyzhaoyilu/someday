import { connect } from 'react-redux';
import { fetchMovieData } from '../../actions/movie_actions';
import { updateHistorylist, showHistorylist } from '../../actions/historylist_actions';
import HistorylistItemDetail from './historylist_item_detail';
// console.log("historylist_detail");

const mstp = (state, ownProps) => {
  return {
    listId: ownProps.listId,
    movieId: ownProps.movieId,
    list: state.entities.historylists[ownProps.listId]
  }
};

const mdtp = dispatch => ({
  updateHistorylist: (historylist) => dispatch(updateHistorylist(historylist)),
  fetchMovieData: movieId => dispatch(fetchMovieData(movieId)),
  showHistorylist: (listId) => dispatch(showHistorylist(listId)),
});

export default connect(mstp, mdtp)(HistorylistItemDetail);
