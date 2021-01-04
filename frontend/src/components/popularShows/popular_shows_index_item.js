import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PopularShowsIndexItem extends Component {
  componentDidMount() {
    this.props.fetchShowData(this.props.showId)

  }

  render() {
    const { show } = this.props
    return (show.image) ? (
      <Link to={`/mediaPage/${show.id}`}>

        <p>{show.title}</p>
        <img src={show.image.url} style={{ width: '250px', height: 'auto' }} />
      </Link>
    ) : null;

  }
}
