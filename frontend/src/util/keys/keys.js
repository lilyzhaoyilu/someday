import prodKey from './keys_prod'
import devKey from './keys_dev'
let movieKey = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-details',
}
if (process.env.NODE_ENV === 'production') {
  movieKey = {...movieKey, headers:{
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': prodKey
  }}
} else {
  movieKey = {
    ...movieKey, headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': devKey
    }
  }
}

export default movieKey;