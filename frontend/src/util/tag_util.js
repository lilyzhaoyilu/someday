import axios from 'axios';

//* Get / api / users /: id / tags - display users tags

export const showMyTags = userId => (
  axios.get(`/api/users/${userid}`)
)

//* Get / api / tags - display all tags, (only need this one)

export const indexOfTags = () => (
  axios.get(`/api/tags`)
)

//* DELETE / api / tag /: id - delete user tags

export const deleteThisTag

//* POST / api / user /: id / tags - add user tag 