import { getUrl } from "../utils";

// Requests the backend to reset a password with the specified token and new password.
const applyPasswordReset = (token, password) => {
  const url = getUrl('/user-service/user/resetPassword?token=' + token);

  return fetch(url, { method: 'POST',  headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({ password: password }) })
    .then(res => {
      if (res.ok) {
        return Promise.resolve();
      } else {
        return Promise.reject(res.status + " " + res.statusText);
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const useApplyPasswordReset = () => applyPasswordReset;

export default useApplyPasswordReset;

