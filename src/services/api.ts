import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR-IP-ADDRESS:3333',
});

export default api;
