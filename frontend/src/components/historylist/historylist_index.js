import React, { Component } from 'react';
import HistorylistIndexItem from './historylist_index_item_container';

export default class HistorylistIndex extends Component {
  componentDidMount() {
    this.props.showMyHistorylists(this.props.userId)
  }

  render() {
    const { historylists } = this.props;
    return historylists ? (
      <div>
        <h1>Historylists:</h1>
        <ul>
          {historylists
            .filter(list => list.user === this.props.userId)
            .map(watched => <HistorylistIndexItem key={watched._id} watched={watched} />)}
        </ul>
      </div>
    ) : null;
  }
}
