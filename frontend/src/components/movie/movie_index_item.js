import React, { Component } from 'react'

export default class MovieIndexItem extends Component {
  render() {
    const { movie, imgUrl, name, year } = this.props
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

