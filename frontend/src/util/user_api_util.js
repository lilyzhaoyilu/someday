import axios from 'axios';

//* PATCH / api / users /: id - update user profile,

export const updateProfile = (userData) => {
  return axios.patch(`/api/users/update/`, userData);
}

//* Get / api / users /: id - look up other users profile

export const getThisUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
}

//* Get / api / users - list other users

export const getAllUsers = () => {
  return axios.get(`/api/users/`);
}

//* get /api/users/current
export const getCurrentUser = () => {
  return axios.get(`/api/users/update`);
}