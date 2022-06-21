const getUrl = (p) => {
  return "http://localhost:8081" + p;
};

// Requests the backend to send a confirmation message to the specified userId.
const sendConfirmation = (userId) => {
  const url = getUrl('/confirmationMessage');

  return fetch(url, { method: 'POST', body: { userId: userId } })
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
