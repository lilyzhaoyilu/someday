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
      this.setState({ movies: this.props.movies.slice(0, 2) })
    )
  }

  fetchMoreData = () => {
    // console.log('fetching!');
    if (this.state.movies.length === 100) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      movies: this.props.movies.slice(0, this.state.movies.length + 2)
    })

  }


  render() {

    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.movies.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          className="trending-movie-index"
          height={200}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all folks!</b>
            </p>
          }
        >

          <ul>
            {this.state.movies.map((movie, i) => {
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
