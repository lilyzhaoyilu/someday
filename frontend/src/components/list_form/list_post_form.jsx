import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
class ListFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      isOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  update() {
    return (e) => this.setState({ list:{...this.state.list, name: e.currentTarget.value}});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.list);
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleModal(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center">New List</h1>
          <div>
            <input
              type="text"
              value={this.state.list.name}
              onChange={this.update()}
              className="form__input"
              id="name"
              placeholder="List name"
            />
            <label for="name" className="form__label">
              List Name
            </label>
          </div>
          <button
            className="list-add-button"
            disabled={this.state.list.name.length < 1}
          >
            {" "}
            {`Create ${this.props.formType}`}
          </button>
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.toggleModal}
            contentLabel="Create List"
            className="list-modal"
            overlayClassName="list-overlay "
            closeTimeoutMS={500}
            ariaHideApp={false}
          >
            <span>Succeffully Create List!</span>
            <button className="list-add-button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        </form>
      </div>
    );
  }
}

export default withRouter(ListFrom);
