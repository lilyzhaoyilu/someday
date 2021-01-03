import React, { Component } from 'react';
import HistorylistIndexItem from './historylist_index_item_container';
import InfiniteScroll from "react-infinite-scroll-component";

export default class HistorylistIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { lists: [] }
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.showMyHistorylists(this.props.userId)
      .then((res) => {
        this.setState({ lists: [this.props.historylists.filter(list => list.user === this.props.userId)[0]] })

      })
  }

  fetchMoreData() {
    this.setState({
      lists: this.state.lists.concat(this.props.historylists
        .filter(list => list.user === this.props.userId)[this.state.lists.length])
    })
  }

  render() {
    // console.log("new", this.state.lists);
    return (
      <div>
        <h1>Historylists:</h1>
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
              return list ? <HistorylistIndexItem key={list._id} watched={list} /> : null;
            }
            )}
          </ul>
        </InfiniteScroll>
      </div>
    )
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
