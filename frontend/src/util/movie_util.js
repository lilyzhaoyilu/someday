import axios from 'axios';

//* get most popular movies
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
    .then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}


//* get data more one movie
export const getThisMovie = (movieId) => (
  axios.request(movieId)
)

