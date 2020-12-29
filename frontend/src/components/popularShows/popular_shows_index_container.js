import { connect } from 'react-redux';
import { fetchPopularTv } from '../../actions/movie_actions';
import PopularShowsIndex from './popular_shows_index';

const mstp = state => ({
  shows: Object.values(state.entities.shows)
});

const mdtp = dispatch => ({
  fetchPopularTv: () => dispatch(fetchPopularTv())
});

export default connect(mstp, mdtp)(PopularShowsIndex)