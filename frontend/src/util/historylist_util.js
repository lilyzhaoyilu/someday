import axios from 'axios';
//* POST / api / watchedlist - create watchedlist

export const postHistorylist = (listData) => (
  axios.post('/api/watchedlist/', listData)
)

//* PATCH / api / watchedlist /: id - update watchedlist(add or delete movie)

export const updateHistorylist = listData => (
  axios.patch(`/api/watchedlist/${listData.id}`, listData)
)

//* DELETE / api / watchedlist /: id - delete the watchedlist

export const deleteHistorylist = listId => (
  axios.delete(`/api/watchedlist/${listId}`)
)

//* Get / api / users /: id / watchedlist / - show this user's history list
//TODO change name
export const showMyHistorylist = userId => (
  axios.get(`/api/users/${userId}/watchedList`)
)

//* Get /api/watchedList/:id -show one watchedlist

export const showHistorylist = listId => (
  axios.get(`/api/watchedlist/${listId}`)
)