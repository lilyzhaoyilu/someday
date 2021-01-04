
import React, { Component } from "react";
import Modal from "react-modal";
import ListForm from "../list_form/historylist_form_container";
export default class MediaHistoryList extends Component {
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
    this.props.showMyHistorylists(this.props.userId);
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
      const list = this.props.historylists.find((list) => list._id === listId);
      if (list.movie.includes(this.props.movieId)) {
        errorList.push(list.name);
      } else {
        list.movie.push(this.props.movieId);
        this.props.updateHistorylist(list);
        successList.push(list.name);
      }
    });
    if (errorList.length !== 0) {
      this.setState({
        isDisplay: !this.state.isDisplay,
        errorList: errorList,
      });
    } else {
      this.setState({
        isDisplay: !this.state.isDisplay,
        successList: successList,
      });
    }
  }

  toggleModal3(e) {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  }
  toggleModal4(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const { historylists } = this.props;
    const { checked, errorList, successList } = this.state;
    const msg =
      successList.length !== 0 ? (
        errorList.length !== 0 ? (
          <div>
            <span>{`Movie succefully added to ${successList}`}</span>
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
    return historylists ? (
      <div>
        <h1>Historylists:</h1>
        <form onSubmit={this.handleSubmit}>
          <ul className="list-tags">
            {historylists
              .filter((list) => list.user === this.props.userId)
              .map((watched, idx) => (
                <li key={idx}>
                  <div>
                    <input
                      type="checkbox"
                      value={watched._id}
                      onChange={this.handleChange}
                      id={idx}
                      checked={checked.indexOf(watched._id) !== -1}
                    />
                    <label for={idx}>{watched.name}</label>
                  </div>
                </li>
              ))}
          </ul>
          <button className="list-add-button">add to lists</button>
        </form>
        <button className="list-add-button" onClick={this.toggleModal4}>
          Add to New Watched List
        </button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal4}
          contentLabel="create New Watched List"
          className="list-modal"
          overlayClassName="list-overlay "
          closeTimeoutMS={500}
          ariaHideApp={false}
        >
          <ListForm movieId = {this.props.movieId}/>
          <button className="list-add-button" onClick={this.toggleModal4}>
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
          <button className="list-add-button" onClick={this.toggleModal3}>
            Close
          </button>
        </Modal>
      </div>
    ) : null;
  }
}
