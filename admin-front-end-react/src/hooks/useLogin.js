const getUrl = (p) => {
  return "http://localhost:8088" + p;
};

const basicAuth = (username, password) => {
  return 'Basic ' + btoa(username + ":" + password);
};

// Requests the backend to login.
const login = (username, password) => {
  const url = getUrl('/token');
  const auth = basicAuth(username, password);

  let headers = new Headers();
  headers.append('Authorization', auth);
  return fetch(url, { method: 'POST', headers: headers })
    .then(res => {
      if (res.ok) {
        localStorage.setItem('loginToken', res.body);
        return Promise.resolve(res.body);
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
