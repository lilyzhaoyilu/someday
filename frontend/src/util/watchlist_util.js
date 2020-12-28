import axios from 'axios';

//* POST / api / todolist - create todo - list
export const postWatchlist = (listData) => {
  return axios.post('/api/todolist', listData);
}

//* PATCH / api / todolist /: id - update todo - list(add or delete movie),
export const updataWatchlist = (listData) => {
  return axios.patch(`/api/todolist/${listData}`, listData);
}

//* DELETE / api / todolist /: id - delete the todolist
export const deleteWatchlist = (listId) => {
  return axios.delete(`/api/todolist/${listId}`)
}

//* Get / api / users /: id / todolist - display user todolists
export const getThisWatchlist = (userId) => {
  return axios.get(`/api/users/${userId}/todolist`)
}