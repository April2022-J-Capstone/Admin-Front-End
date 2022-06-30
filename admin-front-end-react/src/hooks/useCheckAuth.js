import { getStoredLogin } from '../utils';

const useCheckAuth = () => () => {
  return getStoredLogin();
};

export default useCheckAuth;
