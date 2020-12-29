import React, { Component } from 'react'

export default class PopularShowsIndexItem extends Component {
  render() {
    const { show, key, imgUrl, name, year}
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
