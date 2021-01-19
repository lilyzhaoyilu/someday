import React, { Component } from "react";
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
					<h3 id="created-by">Created by</h3>
					<div className="about-item">
						<img
							className="about-img"
							src="https://www.lilylu.me/images/avatar.jpg"
						/>
						<a href="https://www.lilylu.me" target="_blank">
							Lily Zhaoyi Lu
						</a>
					</div>
					<div className="about-item">
						<img
							className="about-img"
							src="https://avatars0.githubusercontent.com/u/65146734?s=460&u=513f1dd90629d2ac3820fc6766893ec48aa420da&v=4"
						/>
						<a
							href="https://www.linkedin.com/in/rex-gao-61a9a5139/"
							target="_blank"
						>
							Rex Gao
						</a>
					</div>
					<div className="about-item">
						<img
							className="about-img"
							src="https://avatars2.githubusercontent.com/u/17303510?s=460&u=1e247e6d0bce5f187159322eec9ae2db99159f12&v=4"
						/>
						<a
							href="https://www.linkedin.com/in/michael-chen-a41770115/"
							target="_blank"
						>
							Michael Chen
						</a>
					</div>
					<div className="about-item">
						<img
							className="about-img"
							target="_blank"
							src="https://media-exp1.licdn.com/dms/image/C5635AQFQW9PdiMBP0w/profile-framedphoto-shrink_800_800/0/1610332035138?e=1611180000&v=beta&t=QRNuNuPchaKu_4wg1E6z9DSb7IaYLRsujsYUGxmWf00"
						/>
						<a href="https://www.linkedin.com/in/samdubyoo/">Samuel Wong</a>
					</div>
				</Modal>
			</div>
		);
	}
}
export default About;
