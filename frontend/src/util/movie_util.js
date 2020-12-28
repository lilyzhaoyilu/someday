import axios from 'axios';

//? movieData reference
//* var options = {
//*   method: 'GET',
//*   url: 'https://imdb8.p.rapidapi.com/title/get-details',
//*   params: { tconst: 'tt0944947' },
//*   headers: {
//*     'x-rapidapi-key': '4f6597c142mshbbf844493d34de0p191b12jsna11cfd54f891',
//*     'x-rapidapi-host': 'imdb8.p.rapidapi.com'
//*   }
//* };

export const getThisMovie = (movieData) => (
  axios.request(movieData)
)

