import {connect} from 'react-redux';
import {fetchMovieData} from '../../../actions/movie_actions';
import MostRecentCommentIndex from './most_recent_comment_index';

const mapStateToProps = (state, ownProps) =>({
    comment: ownProps.comment,
    idx: ownProps.idx,
    movieId: ownProps.comment.movie,
})

const mapDispatchToProps = (dispatch) => ({
    fetchMovieData: (movieId) => dispatch(fetchMovieData(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MostRecentCommentIndex);