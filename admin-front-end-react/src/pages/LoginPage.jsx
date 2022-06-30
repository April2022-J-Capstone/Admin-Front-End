import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { LoginForm } from '../forms';

const LoginPage = (props) => {
    const checkAuth = useCheckAuth();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth({}, false)
            .then(() => {
                // already authenticated, redirect to the home page
                navigate('/user');
            })
            .catch(() => {
                // not authenticated, stay on the login page
            });
    }, [ checkAuth, navigate ]);

    return (
      <div className="container">
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
};

export default LoginPage;
