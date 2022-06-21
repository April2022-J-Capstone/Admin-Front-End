// Networkless logout that deletes the stored authentication.
const useLogout = () => () => {
  localStorage.removeItem('loginToken');
  return Promise.resolve();
};

export default useLogout;
