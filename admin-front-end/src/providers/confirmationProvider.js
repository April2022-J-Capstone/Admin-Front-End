export default {
  // called when the user attempts to confirm their email
  confirmationMessage: (userId) => {
    return Promise.resolve();
  },
  // called when the user attempts to reset their password
  resetPasswordMessage: (email) => {
    return Promise.resolve();
  },
  // called when the user opens the confirmation link
  confirmation: (token) => {
    return Promise.resolve();
  },
  // called when the user submits the reset password link
  resetPassword: (token, password) => {
    return Promise.resolve();
  }
};