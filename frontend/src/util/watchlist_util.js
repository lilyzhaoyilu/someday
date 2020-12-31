import axios from 'axios';

//* POST / api / todolist - create todo - list
export const postWatchlist = (listData) => {
  return axios.post('/api/todoLists/todoList', listData);
}

//* PATCH / api / todolist /: id - update todo - list(add or delete movie),
export const updateWatchlist = (listData) => {
  return axios.patch(`/api/todoLists/todoList/${listData.id}`, listData);
}

//* DELETE / api / todolist /: id - delete the todolist
export const deleteWatchlist = (id) => {
  return axios.delete(`/api/todoLists/todoList/${id}`)
}

//* Get / api / users /: id / todolist - display user's todolists
export const getMyWatchlists = (user_id) => {
  return axios.get(`/api/todoLists/user/${user_id}/todoList`)
}

//* get /api/todoLists/todoList -get all todolists
export const getAllWatchlists = () => (
  axios.get(`/api/todoLists/todoList`)
)

//* get /api/todoLists/todoList/:id get this todoList
export const getThisWatchlist = (id) => (
  axios.get(`/api/todoLists/todoList/${id}`)
)