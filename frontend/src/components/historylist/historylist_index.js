import React, { Component } from 'react';
import HistorylistIndexItem from './historylist_index_item';

export default class HistorylistIndex extends Component {
  componentDidMount() {
    this.props.showMyHistorylists(this.props.userId)
  }

  render() {
    const { historylists } = this.props;
    return historylists ? (
      <div>
        <ul>
          {historylists.map(watched => <HistorylistIndexItem
            key={watched._id} watched={watched} />)}
        </ul>
      </div>
    ) : null;
  }
}
