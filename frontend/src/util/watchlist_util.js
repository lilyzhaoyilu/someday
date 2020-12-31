import axios from 'axios';

//* POST / api / todolist - create todo - list
export const postWatchlist = (listData) => {
  return axios.post('/api/todoLists/todolist', listData);
}

//* PATCH / api / todolist /: id - update todo - list(add or delete movie),
export const updateWatchlist = (listData) => {
  return axios.patch(`/api/todoLists/todolist/${listData}`, listData);
}

//* DELETE / api / todolist /: id - delete the todolist
export const deleteWatchlist = (listId) => {
  return axios.delete(`/api/todoLists/todolist/${listId}`)
}

//* Get / api / users /: id / todolist - display user todolists
export const getMyWatchlist = (userId) => {
  return axios.get(`/api/todoLists/user/${userId}/todolist`)
}