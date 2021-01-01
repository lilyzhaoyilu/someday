import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class PopularShowsIndexItem extends Component {
  componentDidMount() {
    console.log(this.props.index);
    setTimeout(() => this.props.fetchShowData(this.props.showId), this.props.index * 500)

  }

  render() {
    const { show } = this.props
    // console.log(show);
    return (show.image) ? (
      <Link to={`/mediaPage/${show.id}`}>

        <p>{show.title}</p>
        <img src={show.image.url} style={{ width: '150px', height: 'auto' }} />
      </Link>
    ) : null;

  }
}
