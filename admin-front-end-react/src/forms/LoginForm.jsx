import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useLogin } from '../hooks';
import { FormButton, FormCard, FormInput } from '../components';

const LoginForm = () => {
    const login = useLogin();
    const navigate = useNavigate();

    const submit = (event) => {
      login(event.target.username.value, event.target.password.value)
        .then(() => {
          navigate("/user");
        })
        .catch(error => {
          console.error("Login failed");
          console.dir(error);
        });
      event.preventDefault();
    };

    return (
        <FormCard onSubmit={submit}>
          <FormInput type="text" name="username" placeholder="username" autocomplete="username"/>
          <FormInput type="password" name="password" placeholder="password" autocomplete="current-password"/>
          <FormButton type="submit">Login</FormButton>
          <Link to="/forgotPassword"><FormButton>Forgot Password</FormButton></Link>
        </FormCard>
    );
};

export default LoginForm;
