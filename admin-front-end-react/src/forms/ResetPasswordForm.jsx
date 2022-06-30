import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useApplyPasswordReset } from '../hooks';
import { FormButton, FormCard, FormInput } from '../components';

const ResetPasswordForm = () => {
    const applyPasswordReset = useApplyPasswordReset();
    const navigate = useNavigate();
    const location = useLocation();

    const submit = (event) => {
      const token = new URLSearchParams(location.search).get('token');
      if (token == null || token === "") {
        navigate('/forgotPassword'); 
      }

      applyPasswordReset(token, event.target.password.value)
        .then(_ => {
          navigate('/login');
        })
        .catch(_ => {
          navigate('/forgotPassword');
        });
      event.preventDefault();
    };

    return (
        <FormCard onSubmit={submit}>
          <FormInput type="password" name="password" placeholder="New Password" autocomplete="new-password" />
          <FormButton type="submit">Reset Password</FormButton>
        </FormCard>
    );
};

export default ResetPasswordForm;
