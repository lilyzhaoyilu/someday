import React, { Component } from 'react'

export default class PopularMoviesIndexItem extends Component {
  render() {
    const { movie, key, imgUrl, name, year } = this.props
    return (
      <div>
        <li>
          <img src={imgUrl} alt={name} style={{ width: '100px', height: 'auto' }} />
          <h3>{name}</h3>
          <p>{year}</p>
        </li>
      </div>
    )
  }
}
