import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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

export const ForgotPasswordForm = (props) => {
    const { className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const sendResetPasswordMessage = (email) => confirmationProvider.resetPasswordMessage(email);
    const notify = useNotify();
    const navigate = useNavigate();

    const submit = (values) => {
        setLoading(true);
        setTimeout(function(){
          sendResetPasswordMessage(values.email)
            .then(() => {
                setLoading(false);
                notify("Check your email for a link to reset your password.", { type: 'success' });
                setTimeout(function(){ navigate("/login"); }, 200);
            })
            .catch(error => {
                setLoading(false);
                notify("Reset Password Message Failed: Try again later", { type: 'warning' });
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
            <CardContent className={ForgotPasswordFormClasses.content}>
                <TextInput
                    autoFocus
                    source="email"
                    label="Email"
                    validate={required()}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                    className={ForgotPasswordFormClasses.button}
                >
                    {loading ? (
                        <CircularProgress
                            className={ForgotPasswordFormClasses.icon}
                            size={19}
                            thickness={3}
                        />
                    ) : (
                        "Reset Password"
                    )}
                </Button>
            </CardContent>
        </StyledForm>
    );
};

const PREFIX = 'RaForgotPasswordForm';

export const ForgotPasswordFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${ForgotPasswordFormClasses.content}`]: {
        width: 300,
    },
    [`& .${ForgotPasswordFormClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${ForgotPasswordFormClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

ForgotPasswordForm.propTypes = {
    redirectTo: PropTypes.string,
};
