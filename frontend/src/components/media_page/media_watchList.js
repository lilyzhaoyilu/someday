import React, { Component } from "react";

export default class WatchlistIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId);
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
    this.state.checked.forEach((listId) => {
      const list = this.props.watchlists.find((list) => list._id === listId);
      list.movie.push(this.props.movieId);
      console.log(list);
      this.props.updateWatchlist(list);
    });
  }

  render() {
    const { watchlists } = this.props;
    const { checked } = this.state;
    // console.log(`CHECKED: ${checked}`);
    return watchlists ? (
      <div>
        <h1>Watchlists:</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {watchlists
              .filter((list) => list.user === this.props.userId)
              .map((watchlist, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    value={watchlist}
                    onChange={this.handleChange}
                    id={watchlist._id}
                    checked={this.state.checked.indexOf(watchlist._id) !== -1}
                  />
                  {watchlist.name}
                </li>
              ))}
          </ul>
          <button>add to lists</button>
        </form>
      </div>
    ) : null;
  }
}
