// Networkless logout that deletes the stored authentication.
const useLogout = () => () => {
  localStorage.removeItem('login');
  return Promise.resolve();
};

export default useLogout;
