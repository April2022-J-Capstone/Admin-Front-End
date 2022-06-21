const getUrl = (p) => {
  return "http://localhost:8081" + p;
};

// Requests the backend to apply a confirmation with the specified token.
const applyConfirmation = (token) => {
  const url = getUrl('/confirmation?token=' + token);

  return fetch(url, { method: 'PUT' })
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
