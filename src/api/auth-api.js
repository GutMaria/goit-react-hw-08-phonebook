import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const requestSignUp = async body => {
  const response = await authInstance.post('/users/signup', body);
  console.log(response);
  return response;
};

export const requestLogin = async body => {
  const response = await authInstance.post('/users/login', body);
  console.log(response);
  return response;
};
