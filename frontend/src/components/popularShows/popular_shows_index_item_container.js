import { connect } from 'react-redux';
import { fetchShowData } from '../../actions/show_actions';
import IndexItem from './popular_shows_index_item';

const mstp = (state, ownProps) => {
  // console.log(ownProps.showId);
  return {
    show: state.entities.shows[ownProps.showId],
    showId: ownProps.showId
  }
};

const mdtp = dispatch => ({
  fetchShowData: (showId) => dispatch(fetchShowData(showId))
});

export default connect(mstp, mdtp)(IndexItem)