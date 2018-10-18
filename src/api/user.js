import axios from './axios-instance';

const apiUser = {
  register(data) {
    return axios
      .post('/register', data)
      .then(res => res.data);
  },
  login(data) {
    return axios
      .post('/login', data)
      .then(res => res.data);
  },
  getProfile(id) {
    // get fake data of user with id 2
    return axios
      .get('/users/2')
      .then(res => res.data);
  },
  getExamResult() {
    return axios
      .get('/unknown')
      .then(res => res.data);
  },
};

export default apiUser;
