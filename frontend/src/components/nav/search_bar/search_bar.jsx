import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.searchShows(this.state.input);
		this.props.history.push("/search-result", this.props.movies);
	}

	update() {
		return (e) =>
			this.setState({
				input: e.currentTarget.value,
			});
	}

	render() {
		return (
			
				<form className="navbar-search" onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.input}
						placeholder="Search your favorite shows"
						onChange={this.update()}
					/>
					
					<input type="submit" value="Search" />
				</form>
			
		);
	}
}

export default withRouter(SearchBar);
