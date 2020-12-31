import React, { Component } from 'react'

export default class PopularmoviesIndexItem extends Component {
  componentDidMount() {
    setTimeout(() => this.props.fetchMovieData(this.props.showId), this.props.index * 700)


  }

  render() {
    const { show } = this.props
    return (show.image) ? (
      <div>
        <p>{show.title}</p>
        <img src={show.image.url} style={{ width: '100px', height: 'auto' }} />
      </div>
    ) : null;

  }
}
