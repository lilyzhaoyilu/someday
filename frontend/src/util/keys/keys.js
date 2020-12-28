let movieKey = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-details',
}
if (process.env.NODE_ENV === 'production') {
  import prodKey from './keys_prod'
  movieKey = {...movieKey, headers:{
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': prodKey
  }}
} else {
  import devKey from './keys_dev'
  movieKey = {
    ...movieKey, headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': devKey
    }
  }
}

export default movieKey;