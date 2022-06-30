import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks';

const LandingPage = (props) => {
    const checkAuth = useCheckAuth();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth({}, false)
            .then(() => navigate('/user'))
            .catch(() => navigate('/login'));
    }, [ checkAuth, navigate ]);

    return <div/>;
};
export default LandingPage;
