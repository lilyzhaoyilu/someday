import { connect } from 'react-redux';
import ListPostForm from './list_post_form'
import { postHistorylist } from '../../actions/historylist_actions'

const mstp = (state, ownProps) => {

  return {
    modal: ownProps.modal,
    formType: "Watched List",
    list: {
      name: "",
      user: state.session.user.id,
      movie: ownProps.movieId
    }
  }
};

const mdtp = dispatch => ({
  action: (list) => dispatch(postHistorylist(list))
});

export default connect(mstp, mdtp)(ListPostForm)