import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Функція для запису або очищення token
const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};
// ------------------------------------------------

export const requestSignUp = async body => {
  const response = await authInstance.post('/users/signup', body);
  console.log('requestSignUp з арі', response);
  setToken(response.data.token);
  return response;
};

export const requestLogin = async body => {
  const response = await authInstance.post('/users/login', body);
  console.log(response);
  setToken(response.data.token);
  console.log('token', response.data.token);
  return response;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const response = await authInstance.get('/users/current');
    console.log('Зробила запит current в api:', response);
    return response;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const response = await authInstance.post('/users/logout');
  console.log('Зробила запит logout в api:', response);
  // setToken();
  return response;
};

export default authInstance;
