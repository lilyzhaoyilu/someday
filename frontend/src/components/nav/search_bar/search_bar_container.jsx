import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { searchShows } from "../../../actions/movie_actions";

const mSTP = (state, ownProps) => ({
	//* putting all results in movies
	movies: Object.values(state.entities.movies),
});

const mDTP = (dispatch) => ({
	searchShows: (input) => dispatch(searchShows(input)),
});

export default connect(mSTP, mDTP)(SearchBar);
