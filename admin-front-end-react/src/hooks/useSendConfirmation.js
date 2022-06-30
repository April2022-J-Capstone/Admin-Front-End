import { getUrl } from '../utils';

// Requests the backend to send a confirmation message to the specified userId.
const sendConfirmation = (user) => {
  const url = getUrl('/user-service/user/confirmationMessage');

  return fetch(url, { method: 'POST',  headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({ user }) })
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

const useSendConfirmation = () => sendConfirmation;

export default useSendConfirmation;
