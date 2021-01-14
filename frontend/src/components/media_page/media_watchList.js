import React, { Component } from "react";
import Modal from "react-modal";
import ListForm from "../list_form/watchlist_form_container"
export default class WatchlistIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errorList: [],
      successList: [],
      isDisplay: false,
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
    this.toggleModal4 = this.toggleModal4.bind(this);
  }
  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId);
  }

  handleChange(e) {
    const { checked } = this.state;
    const { value } = e.target;
    if (checked.indexOf(value) === -1) {
      this.setState({
        checked: [...checked, value],
      });
    } else {
      this.setState({
        checked: checked.filter((checkedId) => checkedId !== value),
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const errorList = [];
    const successList = [];
    this.state.checked.forEach((listId) => {
      const list = this.props.watchlists.find((list) => list._id === listId);
      if (list.movie.includes(this.props.movieId)) {
        errorList.push(list.name);
      } else {
        list.movie.push(this.props.movieId);
        this.props.updateWatchlist(list);
        successList.push(list.name);
      }
    });

      this.setState({
        isDisplay: !this.state.isDisplay,
        errorList: errorList,
        successList: successList,
      });
  
  }

  toggleModal3(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleModal4(e) {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  }

  render() {
    const { watchlists } = this.props;
    const { checked, errorList, successList } = this.state;
    const msg =
      successList.length !== 0 ? (
        errorList.length !== 0 ? (
          <div>
            <span>{`Movie successfully added to ${successList}`}</span>
            <span>{`Movie already exist in ${errorList}`}</span>
          </div>
        ) : (
          <span>{`Movie succefully added to ${successList}`}</span>
        )
      ) : errorList.length !== 0 ? (
        <div>
          <span>{`Movie already exist in ${errorList}`}</span>
        </div>
      ) : (
        <span>No List is selected</span>
      );
    // console.log(`CHECKED: ${checked}`);
    return watchlists ? (
      <div>
        <h1>Watchlists:</h1>
        <form onSubmit={this.handleSubmit}>
          <ul className="list-tags">
            {watchlists
              .filter((list) => list.user === this.props.userId)
              .map((watchlist, idx) => (
                <li key={idx}>
                  <div>
                    <input
                      type="checkbox"
                      value={watchlist._id}
                      onChange={this.handleChange}
                      id={idx}
                      checked={checked.indexOf(watchlist._id) !== -1}
                    />
                    <label for={idx}>{watchlist.name}</label>
                  </div>
                </li>
              ))}
          </ul>
          <button className="list-add-button">Add to Lists</button>
        </form>
        <button className="list-add-button" onClick={this.toggleModal3}>
          Add to New Todo List
        </button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal3}
          contentLabel="create New Watch List"
          className="list-modal"
          overlayClassName="list-overlay "
          closeTimeoutMS={500}
          ariaHideApp={false}
        >
          <ListForm movieId={this.props.movieId} />
          <button className="list-add-button" onClick={this.toggleModal3}>
            Close
          </button>
        </Modal>
        <Modal
          isOpen={this.state.isDisplay}
          onRequestClose={this.toggleModal3}
          contentLabel="Submit Info"
          className="list-modal"
          overlayClassName="list-overlay "
          closeTimeoutMS={500}
          ariaHideApp={false}
        >
          {msg}
          <button className="list-add-button" onClick={this.toggleModal4}>
            Close
          </button>
        </Modal>
      </div>
    ) : null;
  }
}
