import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieIndexItem extends Component {
  render() {
    // console.log(this.props);
    const { movie, imgUrl, name, year, loggedIn } = this.props
    return loggedIn ? (
      <Link to={`/mediaPage/${movie.id}`} className="tooltip search-result-item" >
        <span className="tooltiptext">{name}
          <br></br>{year}</span>
        <div>
          <img src={imgUrl} alt={name} style={{ width: '200px', height: '300px' }} />

        </div>
      </Link>
    ) : (
        <Link to={`/media_page/${movie.id}`} className="tooltip search-result-item" >
          <span className="tooltiptext">{name}
            <br></br>{year}</span>
          <div>
            <img src={imgUrl} alt={name} style={{ width: '200px', height: '300px' }} />

          </div>
        </Link>
      )
  }
}

