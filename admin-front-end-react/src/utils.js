const getStoredLogin = _ => {
  const storedLogin = localStorage.getItem('login');

  if (!storedLogin)
    return Promise.reject("login not found");

  try {
    const login = JSON.parse(storedLogin);
    const expiration = new Date(login.expiration);
    const hasExpired = expiration > new Date();

    if (hasExpired) {
      localStorage.removeItem('login');
      return Promise.reject("login has expired");
    }
  
    return Promise.resolve(login);
  }
  catch (error) {
    localStorage.removeItem('login');
    return Promise.reject(`failed to parse JSON: ${error}`);
  }
};

const getUrl = (p) => {
  return process.env.REACT_APP_BACKEND_ADDRESS + p;
};


module.exports = { getStoredLogin, getUrl };
