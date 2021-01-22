import {connect} from 'react-redux';
import {getAllComments} from "../../../actions/comment_actions";
import  MostRecentComment from "./most_recent_comment"
const mapStateToProps = (state)=> ({
    comments: Object.values(state.entities.comments),
})

const mapDispatchToProps = (dispatch) =>({
    getAllComments: ()=> dispatch(getAllComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(MostRecentComment);