import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopularmoviesIndexItem extends Component {
  componentDidMount() {
    this.props.fetchMovieData(this.props.showId)


  }

  render() {
    const { show } = this.props
    return (show.image) ? (
      <Link to={`/mediaPage/${show.id}`} className="tooltip">
        <span class="tooltiptext">{show.title}</span>
        <img src={show.image.url} style={{ width: '200px', height: 'auto' }} />
      </Link>
    ) : null;

  }
}
