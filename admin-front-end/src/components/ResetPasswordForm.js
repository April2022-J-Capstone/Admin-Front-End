import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, CardContent, CircularProgress } from '@mui/material';
import {
    Form,
    required,
    useNotify,
    useSafeSetState,
} from 'ra-core';
import { TextInput } from 'react-admin';

import confirmationProvider from '../providers/confirmationProvider';

export const ResetPasswordForm = (props) => {
    const { className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const resetPassword = (token, password) => confirmationProvider.resetPassword(token, password);
    const notify = useNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');

    // If token is invalid, send back to the forgot password page to resend link.
    if (token == null || token === "")
      navigate("/forgotPassword");

    const submit = (values) => {
        setLoading(true);
        setTimeout(function(){
          resetPassword(token, values.password)
            .then(() => {
                setLoading(false);
                notify("Password successfully set.", { type: 'success' });
                setTimeout(function(){ navigate("/login"); }, 200);
            })
            .catch(error => {
                setLoading(false);
                notify("Reset Password Failed: Try again later", { type: 'warning' });
                setTimeout(function(){ navigate("/forgotPassword"); }, 200);
            });
        }, 500);
        
    };

    return (
        <StyledForm
            onSubmit={submit}
            mode="onChange"
            noValidate
            className={className}
        >
            <CardContent className={ResetPasswordFormClasses.content}>
                <TextInput
                    autoFocus
                    source="password"
                    label="Password"
                    validate={required()}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                    className={ResetPasswordFormClasses.button}
                >
                    {loading ? (
                        <CircularProgress
                            className={ResetPasswordFormClasses.icon}
                            size={19}
                            thickness={3}
                        />
                    ) : (
                        "Submit New Password"
                    )}
                </Button>
            </CardContent>
        </StyledForm>
    );
};

const PREFIX = 'RaResetPasswordForm';

export const ResetPasswordFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${ResetPasswordFormClasses.content}`]: {
        width: 300,
    },
    [`& .${ResetPasswordFormClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${ResetPasswordFormClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

ResetPasswordForm.propTypes = {
    redirectTo: PropTypes.string,
};
