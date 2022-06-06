import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { CardContent, CircularProgress } from '@mui/material';
import { Form, useNotify } from 'ra-core';

import confirmationProvider from '../providers/confirmationProvider';

export const ConfirmationCard = (props) => {
    const { className } = props;
    const confirm = (token) => confirmationProvider.confirmation(token);
    const notify = useNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');

    // If token is invalid, send back to home page.
    if (token == null || token === "")
      navigate("/");
    
    React.useEffect(() => {
      setTimeout(function() {
        confirm(token)
            .then(() => {
                notify("Email is confirmed!", { type: 'success' });
                setTimeout(() => navigate("/"), 250);
            })
            .catch(error => {
                notify("Email failed to confirm", { type: 'error' });
                setTimeout(() => navigate("/"), 250);
            });
      }, 500);
    });

    return (
        <StyledForm className={className}>
            <CardContent className={ConfirmationCardClasses.content}>
                <CircularProgress
                    className={ConfirmationCardClasses.icon}
                    size={19}
                    thickness={3}
                />
            </CardContent>
        </StyledForm>
    );
};

const PREFIX = 'RaConfirmationCard';

export const ConfirmationCardClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${ConfirmationCardClasses.content}`]: {
        width: 300,
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${ConfirmationCardClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${ConfirmationCardClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

ConfirmationCard.propTypes = {
    redirectTo: PropTypes.string,
};
