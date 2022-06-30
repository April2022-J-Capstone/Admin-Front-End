import { getUrl } from '../utils';

// Requests the backend to send a reset password message to the specified email.
const sendPasswordReset = (email) => {
  const url = getUrl('/user-service/user/resetPasswordMessage');

  return fetch(url, { method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({ email: email }) })
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

const useSendPasswordReset = () => sendPasswordReset;

export default useSendPasswordReset;
