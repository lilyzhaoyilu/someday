import React, { Component } from 'react'

export default class PopularShowsIndexItem extends Component {
  componentDidMount() {
    // console.log(this.props.showId);
    // this.props.fetchShowData(this.props.showId)
    console.log(this.props.index);
    setTimeout(() => this.props.fetchShowData(this.props.showId), this.props.index * 1000)

  }

  render() {
    const { show } = this.props
    // console.log(show);
    return (show.image) ? (
      <div>
        <p>{show.title}</p>
        <img src={show.image.url} style={{ width: '100px', height: 'auto' }} />
      </div>
    ) : null;

  }
}
