import { connect } from 'react-redux';
import ListPostForm from './list_post_form'
import { postWatchlist } from '../../actions/watchlist_actions'

const mstp = (state, ownProps) => {

  return {
    modal: ownProps.modal,
    formType: "Watch List",
    list: {
      name: "",
      user: state.session.user.id,
      movie: ownProps.movieId,
    },
  };
};

const mdtp = dispatch => ({
  action: (list) => dispatch(postWatchlist(list))
});

export default connect(mstp, mdtp)(ListPostForm)