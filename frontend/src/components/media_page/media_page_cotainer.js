import { connect } from 'react-redux';
import {fetchShowData} from "../../actions/movie_actions";
import MediaPage from "./media_page";

const mapStateToProps = (state, ownProps) => ({
    movieId: ownProps.id,
});

const mapDispatchToProps = (dispatch) => ({
    fetchShowData: (movieId) => {
        return dispatch(fetchShowData(movieId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPage);