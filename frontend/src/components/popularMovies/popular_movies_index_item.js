import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopularmoviesIndexItem extends Component {
  componentDidMount() {
    this.props.fetchMovieData(this.props.showId)


  }

  render() {
    const { show } = this.props
    return (show) ? (
      <Link to={`/mediaPage/${show.id}`} className="tooltip">
        {console.log(show)}
        <span className="tooltiptext">{show.title}</span>
        <div>
          <img src={show.image.url} style={{ width: '200px', height: 'auto' }} />
        </div>
      </Link>
    ) : null;

  }
}
