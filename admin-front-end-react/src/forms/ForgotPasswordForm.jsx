import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSendPasswordReset } from '../hooks';
import { FormButton, FormCard, FormInput } from '../components';

const ForgotPasswordForm = () => {
    const sendPasswordReset = useSendPasswordReset();
    const navigate = useNavigate();

    const submit = (event) => {
      sendPasswordReset(event.target.email.value)
        .then(() => {
          navigate("/login");
        })
        .catch(error => {
          console.error("SendPasswordReset failed");
          console.dir(error);
        });
      event.preventDefault();
    };

    return (
        <FormCard onSubmit={submit}>
          <FormInput type="text" name="email" placeholder="email"/>
          <FormButton type="submit">Send Password Reset</FormButton>
        </FormCard>
    );
};

export default ForgotPasswordForm;
