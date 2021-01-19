import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import PopularShowsIndexItem from './popular_shows_index_item_container';

export default class PopularShowsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      shows: []
    }

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.fetchPopularTv().then(
      (res) => {
        this.setState({ shows: this.props.shows.slice(0, 2) })
      }
    )
  }

  fetchMoreData = () => {
    if (this.state.shows.length === 100) {
      this.setState({ hasMore: false });
      return;
    }
    this.setState({
      shows: this.props.shows.slice(0, this.state.shows.length + 3)
    })

  }


  render() {

    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.shows.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          className="trending-show-index"
          height={300}
          scrollThreshold={0.6}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all folks!</b>
            </p>
          }
        >

          <ul className="popular-ul">
            {this.state.shows.map((movie, i) => {
              // { console.log("rendering") }
              return (
                <PopularShowsIndexItem
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
