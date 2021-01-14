import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PopularShowsIndexItem extends Component {
  componentDidMount() {
    this.props.fetchShowData(this.props.showId)

  }

  render() {
    const { show } = this.props
    return (show.image) ? (
      <Link to={`/media_page/${show.id}`} className="tooltip movie-item">
        <span className="tooltiptext">{show.title}</span>
        <div>
          <img src={show.image.url} style={{ width: '200px', height: 'auto' }} />
        </div>
      </Link>
    ) : null;

  }
}
