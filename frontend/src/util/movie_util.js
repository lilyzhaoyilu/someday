import axios from 'axios';

//* get most popular movies from API
export const getMostPopularMovies = () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
    params: { homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US' },
    headers: {
      'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };

  return axios.request(options)

}

//* get most popular tv-shows from API

export const getMostPopularTV = () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows',
    params: { homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US' },
    headers: {
      'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
  return axios.request(options)
}


//* search movies auto completed from API

export const searchShow = (input) => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
    params: { q: input },
    headers: {
      'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };

  return axios.request(options)

}

//* fetchMovieData aka show from API

export const fetchShowData = (movieId) => {

  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
    params: { tconst: movieId, currentCountry: 'US' },
    headers: {
      'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };

  return axios.request(options)
}

//* fetch All shows from backend
export const fetchAllShows = () =>(
  axios.get('/api/movie')
)