import { connect } from 'react-redux';
import { fetchMovieData } from "../../actions/movie_actions";
import MediaPage from "./media_page";

const mapStateToProps = (state, ownProps) => ({
     movieId: ownProps.match.params.movieId,
    userId: state.session.user.id
    
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieData: (movieId) => dispatch(fetchMovieData(movieId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage);