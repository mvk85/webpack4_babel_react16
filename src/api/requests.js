import axios from 'axios';

axios.defaults.headers.post['Accept'] = '*/*';
const instance = axios.create({
  baseURL: 'http://lorem-ipsum.online/',
  headers: {Accept: '*/*'},
});
const axiosJson = axios.create({
  baseURL: 'http://lorem-ipsum.online/',
  headers: {'Content-Type': 'application/json'},
});


export const registration = ({email, password}) =>
  instance.post('/users', `email=${email}&password=${password}`).then(response => {
    if (response.data.result === 'error') return Promise.reject(response);
    return response;
  });

export const candles = (symbol, offset) => instance.get('/candles', {params: {symbol, offset}});

export const getWallet = () => instance.get('/users/wallet');

export const getToken = ({email, password}) => axiosJson.post('/user_token', {auth: {email, password}})
  .then(response => {
    if (response.data.result === 'error') {
      return Promise.reject(response);
    }

    return response;
  });

export const setTokenApi = access_token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
};

export const clearTokenApi = () => {
  instance.defaults.headers.common['Authorization'] = undefined;
};

export const getUserTransactions = () => instance.get('/transactions?limit=25');