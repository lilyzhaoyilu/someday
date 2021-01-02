import { connect } from 'react-redux';
import { fetchPopularTv, fetchShowData } from '../../actions/show_actions'
import MediaIndex from './media_index'

const mSTP = (state, ownProps) => ({
  media: Object.values(state.entities.shows)
});

const mDTP = (dispatch) => ({
  action: () => dispatch(fetchPopularTv()),
  fetchMediaData: (showId) => dispatch(fetchShowData(showId))
});

export default connect(mSTP, mDTP)(MediaIndex)