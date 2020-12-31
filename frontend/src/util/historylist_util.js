import axios from 'axios';

//* get /api/watchedLists/watchedList -get all watchedLists

export const getAllHistoryLists = () => (
  axios.get(`/api/watchedLists/watchedList`)
)

//* POST / api / watchedList - create a watchedList

export const postHistorylist = (listData) => (
  axios.post('/api/watchedLists/watchedList/', listData)
)

//* PATCH / api / watchedList /: id - update watchedList(add or delete movie)

export const updateHistorylist = listData => (
  axios.patch(`/api/watchedLists/watchedList/${listData.id}`, listData)
)

//* DELETE / api / watchedList /: id - delete the watchedList

export const deleteHistorylist = id => (
  axios.delete(`/api/watchedLists/watchedList/${id}`)
)

//* Get / api / users /: id / watchedList / - show this user's history list
//TODO change name
export const showMyHistorylists = user_id => (
  axios.get(`/api/watchedLists/user/${user_id}/watchedList`)
)

//* Get /api/watchedList/:id -show one watchedList

export const showHistorylist = id => (
  axios.get(`/api/watchedLists/watchedList/${id}`)
)