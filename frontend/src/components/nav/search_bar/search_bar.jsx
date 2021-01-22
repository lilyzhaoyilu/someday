import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import search from "../../../util/search.png";
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.clearMovies();
		this.props
			.searchShows(this.state.input)
			.then((res) => this.props.history.replace({
				pathname: "/search-result",
				state: { detail: this.state.input }
			}));
	}

	update() {
		return (e) =>
			this.setState({
				input: e.currentTarget.value,
			});
	}
	render() {
		return (
			<form className="search-bar" onSubmit={this.handleSubmit}>	
				<div className="search-input">
					<label htmlFor="search">Search for stuff</label>
					<input
						id="search"
						type="text"
						value={this.state.input}
						placeholder="Search shows/users"
						onChange={this.update()}
					/>
					<button>search</button>
				</div>
			</form>
		);
	}
}

export default withRouter(SearchBar);
