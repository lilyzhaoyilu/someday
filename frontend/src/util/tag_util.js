import axios from 'axios';


//* Get / api / tags - display all tags, (only need this one)

export const indexOfTags = () => (
  axios.get(`/api/tags`)
)
