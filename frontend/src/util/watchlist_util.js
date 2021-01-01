import axios from 'axios';

//* /api/dotoLists/todoList -get all todoLists

export const getAllWatchlists = () => (
  axios.get(`/api/dotoLists/todoList`)
)

//* POST / api / todoList - create todo - list
export const postWatchlist = (listData) => {
  return axios.post('/api/todoLists/todoList', listData);
}

//* PATCH / api / todoList /: id - update todo - list(add or delete movie),
export const updateWatchlist = (listData) => {
  return axios.patch(`/api/todoLists/todoList/${listData}`, listData);
}

//* DELETE / api / todoList /: id - delete the todoList
export const deleteWatchlist = (listId) => {
  return axios.delete(`/api/todoLists/todoList/${listId}`)
}

//* Get / api / users /: id / todoList - display user todoLists
export const getMyWatchlists = (userId) => {
  return axios.get(`/api/todoLists/user/${userId}/todoList`)
}

//* get /api/dotoLists/todoList/id -get specific todoList
export const getThisWatchList = (listId) => {
  return axios.get(`/api/dotoLists/todoList/${listId}`)
}