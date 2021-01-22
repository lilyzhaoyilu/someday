import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import PopularMoviesIndexItem from './popular_movies_index_item_container';

export default class PopularMoviesIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      movies: []
    }

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.fetchPopularMovies().then(
      res => {
        this.setState({ movies: this.props.movies.slice(0, 2) })
      }
    )
  }

  fetchMoreData = () => {
    // console.log('fetching!');
    if (this.state.movies.length === 100) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      movies: this.props.movies.slice(0, this.state.movies.length + 3)
    })

  }


  render() {

    return (
      <div className="trending-movie-index">
        <h1 className="trending-title">trendeing movies</h1>
        <InfiniteScroll
          dataLength={this.state.movies.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={300}
          scrollThreshold={0.6}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all folks!</b>
            </p>
          }
        >
          {/* {console.log(this.state)} */}
          <ul className="popular-ul">
            {this.state.movies.map((movie, i) => {
              // { console.log('rendering movie') }
              return (
                <PopularMoviesIndexItem
                  showId={movie.id}
                  key={movie.id}
                  idx={i}
                />
              )
            })}
          </ul>



        </InfiniteScroll >
      </div >
    )


    // const { movies } = this.state
    // return (
    //   <div>
    //     <ul>
    //       {movies.map((movie, i) => {
    //         if (i < 8) {
    //           return (
    //             <PopularMoviesIndexItem
    //               showId={movie.id}
    //               key={movie.id}
    //               idx={i}
    //             />
    //           )
    //         }
    //       })}
    //     </ul>
    //   </div>
    // )
  }
}
