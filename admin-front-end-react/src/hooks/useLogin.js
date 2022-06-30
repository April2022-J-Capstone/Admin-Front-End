import jwt_decode from 'jwt-decode';
import { getUrl } from '../utils';

const basicAuth = (username, password) => {
  return 'Basic ' + btoa(username + ":" + password);
};

// Requests the backend to login.
const login = (username, password) => {
  const url = getUrl('/authentication-service/token');
  const auth = basicAuth(username, password);

  let headers = new Headers();
  headers.append('Authorization', auth);
  return fetch(url, { method: 'POST', headers: headers })
    .then(res => {
      if (res.ok) {
        return res.text()
          .then(token => {
            const decoded = jwt_decode(token);
            const login = {
              token: token,
              expiration: decoded.exp,
              username: decoded.sub
            };
            localStorage.setItem('login', JSON.stringify(login));
            return Promise.resolve(login);
          })
          .catch(e => console.error(`Error converting response to JSON: ${e}`))
      } else {
        return Promise.reject(res.status + " " + res.statusText);
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const useLogin = () => login;

export default useLogin;
