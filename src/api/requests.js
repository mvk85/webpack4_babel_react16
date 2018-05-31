import axios from 'axios';

axios.defaults.headers.post['Accept'] = '*/*';

const instance = axios.create({
  baseURL: 'http://lorem-ipsum.online/',
  headers: {Accept: '*/*'},
});

export const registration = ({email, password}) =>
  instance.post('/users', `email=${email}&password=${password}`).then(response => {
    if (response.data.result === 'error') return Promise.reject(response);
    return response;
  });