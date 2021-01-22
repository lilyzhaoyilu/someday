import React, { Component } from 'react';
import HistorylistIndexItem from './historylist_index_item_container';
import InfiniteScroll from "react-infinite-scroll-component";

export default class HistorylistIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { lists: [], hasMore: true }
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.showMyHistorylists(this.props.userId)
      .then((res) => {
        this.setState({ lists: [this.props.historylists.filter(list => list.user === this.props.userId)[1]] })
      })
  }

  fetchMoreData() {
    if (this.state.lists.length === this.props.historylists.length) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      lists: this.state.lists.concat(this.props.historylists
        .filter(list => list.user === this.props.userId)[this.state.lists.length])
    })
  }

  render() {
    return (this.state.lists) ? (
      <div className="historylist-index">
        <h2>Historylists ···({this.props.historylists.filter(list => list.user === this.props.userId).length} historylists)</h2>
        <InfiniteScroll
          dataLength={this.state.lists.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4 style={{ height: "700px" }}>Loading...</h4>}
          height={400}
          scrollThreshold={0.4}
          className={"historylist-index"}
          endMessage={
            <p >
              The End
            </p>
          }
        >
          <ul>
            {this.state.lists.map((list, i) => {
              return (list) ? <HistorylistIndexItem key={list._id} historylist={list} /> : null;
            }
            )}
          </ul>
        </InfiniteScroll>
      </div>
    ) : null;
    // const { historylists } = this.props;
    // return historylists ? (
    //   <div>
    //     <h1>Historylists:</h1>
    //     <ul>
    //       {historylists
    //         .filter(list => list.user === this.props.userId)
    //         .map(watched => <HistorylistIndexItem key={watched._id} watched={watched} />)}
    //     </ul>
    //   </div>
    // ) : null;
  }
}
