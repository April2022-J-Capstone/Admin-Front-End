// Quick networkless check if the user is logged in.
const useCheckAuth = () => () => {
  // TODO: Decode the login token and use moment.js to check if it is expired.
  return localStorage.getItem('loginToken')
        ? Promise.resolve()
        : Promise.reject();
};

export default useCheckAuth;
