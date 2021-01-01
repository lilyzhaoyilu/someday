import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieIndexItem extends Component {
  render() {
    const { movie, imgUrl, name, year } = this.props
    return (
      <div>
        <li>
          <Link to={`/mediaPage/${movie.id}`}>
            <img src={imgUrl} alt={name} style={{ width: '100px', height: 'auto' }} />
            <h3>{name}</h3>
            <p>{year}</p>
          </Link>
        </li>
      </div>
    )
  }
}

