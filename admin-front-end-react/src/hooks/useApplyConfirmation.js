import { getUrl } from "../utils";

// Requests the backend to apply a confirmation with the specified token.
const applyConfirmation = (token) => {
  const url = getUrl('/user-service/user/confirmation?token=' + token);

  return fetch(url, { method: 'PUT', headers: new Headers({ 'content-type': 'application/json' }) })
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

const useApplyConfirmation = () => applyConfirmation;

export default useApplyConfirmation;
