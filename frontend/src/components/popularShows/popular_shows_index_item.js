import React, { Component } from 'react'

export default class PopularShowsIndexItem extends Component {
  render() {
    const { show } = this.props
    console.log(show.id);

    return (
      <div>
        <li>
          <p>{show.id}</p>
          {/* <img src={imgUrl} alt={name} style={{ width: '100px', height: 'auto' }} />
          <h3>{name}</h3>
          <p>{year}</p> */}
        </li>
      </div>
    )
  }
}