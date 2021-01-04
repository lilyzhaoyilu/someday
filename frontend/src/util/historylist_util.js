import axios from 'axios';
//* POST / api / watchedlist - create watchedlist

export const postHistorylist = (listData) => (
  axios.post('/api/watchedLists/watchedList/', listData)
)

//* PATCH / api / watchedlist /: id - update watchedlist(add or delete movie)

export const updateHistorylist = listData => (
  axios.patch(`/api/watchedLists/watchedList/${listData._id}`, listData)
)

//* DELETE / api / watchedlist /: id - delete the watchedlist

export const deleteHistorylist = listId => (
  axios.delete(`/api/watchedLists/watchedList/${listId}`)
)

//* Get / api / users /: id / watchedlist / - show this user's history list
//TODO change name
export const showMyHistorylists = userId => (
  axios.get(`/api/watchedLists/user/${userId}/watchedList`)
)

//* Get /api/watchedList/:id -show one watchedlist

export const showHistorylist = listId => (
  axios.get(`/api/watchedLists/watchedList/${listId}`)
)

export const getAllHistorylists = () => (
  axios.get(`/api/watchedLists/watchedList`)
)


