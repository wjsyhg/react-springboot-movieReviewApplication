import axios from 'axios';

const api = axios.create({
  baseURL: 'https://springboot-moviereviewapphosting-production.up.railway.app/',
});

export default api;
