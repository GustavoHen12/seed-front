import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/api/auth/';
const API_URL = 'https://behope-api.herokuapp.com/api/auth/';

class AuthService {
  login(user) {
    console.log(user);
    return axios
      .post(API_URL, {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.access) {
           localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  refresh(user) {
    return axios({
        method: 'post',
        url: API_URL+'refresh/',
        header: "Content-Type: application/json",
        data: {
            refresh: user.refresh
        }
    })
    .then(response => {
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify({
                refresh: user.refresh,
                access: response.data.access
            }));
        }

        return response.data;
    });
  }

//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     });
//   }
}

export default new AuthService();
