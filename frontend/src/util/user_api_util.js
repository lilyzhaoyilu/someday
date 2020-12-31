import axios from 'axios';

//* PATCH / api / users /: id - update user profile,

export const updateProfile = (userData) => {
  return axios.patch(`/api/users/update/`, userData);
}

//* Get / api / users /: id - look up other users profile

export const getThisUser = (user_id) => {
  return axios.get(`/api/users/${user_id}`);
}

// //* Get / api / users - list other users

export const getAllUsers = () => {
  return axios.get(`/api/users/`);
}

//* get /api/users/current
// export const getCurrentUser = () => {
//   return axios.get(`/api/users/current`);
// }

