import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieIndexItem extends Component {
  render() {
    const { movie, imgUrl, name, year } = this.props
    return (
      <Link to={`/mediaPage/${movie.id}`} className="tooltip search-result-item" >
      
        
        <span className="tooltiptext">{name}
        <br></br>{year}</span>
        <div>
            <img src={imgUrl} alt={name} style={{ width: '200px', height: '300px' }} />    
     
      </div>
      </Link>
    )
  }
}

