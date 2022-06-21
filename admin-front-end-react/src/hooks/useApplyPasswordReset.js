const getUrl = (p) => {
  return "http://localhost:8081" + p;
};

// Requests the backend to reset a password with the specified token and new password.
const applyPasswordReset = (token, password) => {
  const url = getUrl('/resetPassword?token=' + token);

  return fetch(url, { method: 'PUT', body: { password: password } })
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

