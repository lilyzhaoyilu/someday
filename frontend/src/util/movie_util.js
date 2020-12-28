var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-details',
  params: { tconst: 'tt0944947' },
  headers: {
    'x-rapidapi-key': '4f6597c142mshbbf844493d34de0p191b12jsna11cfd54f891',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});