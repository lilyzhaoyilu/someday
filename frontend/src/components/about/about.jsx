import React, { Component } from 'react';
import Modal from "react-modal";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }


 

  render() {
    return (
      <div className="about">
             
        <button className="about-button-us" onClick={this.toggleModal}>
          About us
        </button>

        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal}
          // contentLabel="My Todo List"
          className="about-modal"
          overlayClassName="about-overlay" //this is intentionally left blank in css
          closeTimeoutMS={100}
          ariaHideApp={false}
        >
          <div>Created by</div>
          <div><a href="https://www.lilylu.me">Lily Zhaoyi Lu</a></div>
          <div><a href="https://www.linkedin.com/in/rex-gao-61a9a5139/">Rex Gao</a></div>
          <div><a href="https://www.linkedin.com/in/michael-chen-a41770115/">Michael Chen</a></div>
          <div><a href="https://www.linkedin.com/in/samdubyoo/">Samuel Wong</a></div>
        </Modal>
 
     

      </div>
    )
  }
}
export default About;
