import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopularmoviesIndexItem extends Component {
  componentDidMount() {
    setTimeout(() => this.props.fetchMovieData(this.props.showId), this.props.index * 300)


  }

  render() {
    const { show } = this.props
    return (show.image) ? (
      <Link to={`/mediaPage/${show.id}`}>
        <p>{show.title}</p>
        <img src={show.image.url} style={{ width: '150px', height: 'auto' }} />
      </Link>
    ) : null;

  }
}
