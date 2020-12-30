import { connect } from 'react-redux';
import { fetchShowData } from '../../actions/movie_actions';
import IndexItem from './popular_shows_index_item';

const mstp = (state, ownProps) => ({
  show: state.entities.movies[ownProps.show.id]
});

const mdtp = dispatch => ({
  fetchShowData: (showId) => dispatch(fetchShowData(showId))
});

export default connect(mstp, mdtp)(IndexItem)