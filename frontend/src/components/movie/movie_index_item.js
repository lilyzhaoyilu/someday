import React, { Component } from 'react'

export default class MovieIndexItem extends Component {
  render() {
    const { movie, url, imgUrl, name }
    return (
      <div>
        <a href={url}>
          <img src={imgUrl} alt={name} />
        </a>
        <h3>{name}</h3>
      </div>
    )
  }
}

