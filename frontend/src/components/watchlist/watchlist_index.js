import React, { Component } from 'react';
import WatchlistIndexItem from './watchlist_index_item_container';
import InfiniteScroll from "react-infinite-scroll-component";

export default class WatchlistIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { lists: [], hasMore: true }
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId)
      .then((res) => {
        this.setState({ lists: [this.props.watchlists.filter(list => list.user === this.props.userId)[0]] })
      })
  }

  fetchMoreData() {
    if (this.state.lists.length === this.props.watchlists.length) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      lists: this.state.lists.concat(this.props.watchlists
        .filter(list => list.user === this.props.userId)[this.state.lists.length])
    })
  }

  render() {
    const { lists } = this.state;

    return (
      <div>
        {console.log(this.state)}
        <h1>Watchlists:</h1>
        <InfiniteScroll
          dataLength={this.state.lists.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={200}
          classname={"historylist-index"}
          endMessage={
            <p>The End</p>
          }
        >
          <ul>
            {this.state.lists.map((list, i) => {
              return (list) ? <WatchlistIndexItem key={list._id} watchlist={list} /> : null;
            }
            )}
          </ul>

        </InfiniteScroll>
      </div>
    )

    // return (
    //   <div>
    //     <h1>Watchlists:</h1>
    //     <ul>
    //       {lists
    //         .filter(list => list.user === this.props.userId)
    //         .map(watchlist => <WatchlistIndexItem
    //           watchlist={watchlist}
    //           key={watchlist._id} />)}
    //     </ul>
    //   </div>
    // )
  }
}
