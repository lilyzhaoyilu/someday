import { connect } from 'react-redux';
import { fetchMovieData } from "../../actions/movie_actions";
import MediaPage from "./media_page";

const mapStateToProps = (state, ownProps) => {
    
    return { movieId: ownProps.match.params.movieId };
    
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovieData: (movieId) => {
    return dispatch(fetchMovieData(movieId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage);