const getUrl = (p) => {
  return "http://localhost:8081" + p;
};

// Requests the backend to send a reset password message to the specified email.
const sendPasswordReset = (email) => {
  const url = getUrl('/resetPasswordMessage');

  return fetch(url, { method: 'POST', body: { email: email } })
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
