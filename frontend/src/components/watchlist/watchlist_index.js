import React, { Component } from 'react';
import WatchlistIndexItem from './watchlist_index_item';
import InfiniteScroll from "react-infinite-scroll-component";

export default class WatchlistIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { lists: [] }
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.getMyWatchlists(this.props.userId)
      .then((res) => {
        this.setState({ lists: [this.props.watchlists.filter(list => list.user === this.props.userId)[0]] })
      })
  }

  fetchMoreData() {
    this.setState({
      lists: this.state.lists.concat(this.props.watchlists
        .filter(list => list.user === this.props.userId)[this.state.lists.length])
    })
  }

  render() {
    const { lists } = this.state;

    return (
      <div>
        <h1>Watchlists:</h1>
        <InfiniteScroll
          dataLength={this.state.lists.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={100}
          classname={"historylist-index"}
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
