import React, { Component } from 'react';
import HistorylistIndexItem from './historylist_index_item';

export default class HistorylistIndex extends Component {
  componentDidMount() {
    this.props.showHistorylist(this.props.match.params.userId)
  }

  render() {
    const { historylist } = this.props;
    return historylist ? (
      <div>
        <ul>
          {historylist.map(watched => <HistorylistIndexItem 
          key={watched.id} watched={watched}/>)}
        </ul>
      </div>
    ) : null;
  }
}
