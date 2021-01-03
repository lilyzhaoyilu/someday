
import React, { Component } from "react";
import Modal from "react-modal";
export default class MediaHistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errorList: [],
      successList: [],
      isDisplay: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
  }

  componentDidMount() {
    this.props.showMyHistorylists(this.props.userId);
  }

  handleChange(e) {
    const { checked } = this.state;
    const { id } = e.target;
    if (checked.indexOf(id) === -1) {
      this.setState({
        checked: [...checked, id],
      });
    } else {
      this.setState({
        checked: checked.filter((checkedId) => checkedId !== id),
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
    }else{
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

  render() {
    const { historylists } = this.props;
    const { checked ,errorList, successList } = this.state;
    const msg =
      errorList.lenght === 0 ? (
        <span>{`Movie succefully added to ${successList}`}</span>
      ) : successList.length !== 0 ? (
        <div>
          <span>{`Movie succefully added to ${successList}`}</span>
          <span>{`Movie already exist in ${errorList}`}</span>
        </div>
      ) : (
        <span>{`Movie already exist in ${errorList}`}</span>
      );
    // console.log(`CHECKED: ${checked}`);
    return historylists ? (
      <div>
        <h1>Historylists:</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {historylists
              .filter((list) => list.user === this.props.userId)
              .map((watched, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    value={watched}
                    onChange={this.handleChange}
                    id={watched._id}
                    checked={checked.indexOf(watched._id) !== -1}
                  />
                  {watched.name}
                </li>
              ))}
          </ul>
          <button className="list-add-button">add to lists</button>
        </form>
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
