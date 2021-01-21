const mSTP = (state, ownProps) => ({
  users: state.entities.users
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)()