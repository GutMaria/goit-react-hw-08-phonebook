// import axios from 'axios';
import authInstance from '../api/auth-api';

// const instance = axios.create({
//   baseURL: 'https://65c8ddc8a4fbc162e1124f5a.mockapi.io/contacts',
// });

export const requestContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await authInstance.post('/contacts/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
