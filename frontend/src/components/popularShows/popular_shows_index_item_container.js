import { connect } from 'react-redux';
import { fetchShowData } from '../../actions/show_actions';
import PopularShowsIndexItem from './popular_shows_index_item';

const mstp = (state, ownProps) => {
  return {
    show: state.entities.shows[ownProps.showId],
    showId: ownProps.showId,
    index: ownProps.index
  }
};

const mdtp = dispatch => ({
  fetchShowData: (showId) => dispatch(fetchShowData(showId))
});

export default connect(mstp, mdtp)(PopularShowsIndexItem)