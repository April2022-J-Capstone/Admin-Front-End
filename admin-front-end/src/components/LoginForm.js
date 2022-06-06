import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, CardContent, CircularProgress } from '@mui/material';
import {
    Form,
    required,
    useTranslate,
    useLogin,
    useNotify,
    useSafeSetState,
} from 'ra-core';
import { TextInput } from 'react-admin';

export const LoginForm = (props) => {
    const { redirectTo, className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const login = useLogin();
    const translate = useTranslate();
    const notify = useNotify();
    const navigate = useNavigate();

    const submit = (values) => {
        setLoading(true);
        setTimeout(function(){
          login(values, redirectTo)
            .then(() => {
                setLoading(false);
                notify("Login successful!", { type: 'success' });
                setTimeout(function(){ navigate("/login"); }, 200);
            })
            .catch(error => {
                setLoading(false);
                notify("Login failed!", { type: 'error' });
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
            <CardContent className={LoginFormClasses.content}>
                <TextInput
                    autoFocus
                    source="username"
                    label={translate('ra.auth.username')}
                    validate={required()}
                    fullWidth
                />
                <TextInput
                    source="password"
                    label={translate('ra.auth.password')}
                    type="password"
                    autoComplete="current-password"
                    validate={required()}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                    className={LoginFormClasses.button}
                >
                    {loading ? (
                        <CircularProgress
                            className={LoginFormClasses.icon}
                            size={19}
                            thickness={3}
                        />
                    ) : (
                        translate('ra.auth.sign_in')
                    )}
                </Button>
                
                <Link to="/forgotPassword">
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className={LoginFormClasses.button}
                    >
                        Forgot Password
                    </Button>
                </Link>
            </CardContent>
        </StyledForm>
    );
};

const PREFIX = 'RaLoginForm';

export const LoginFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${LoginFormClasses.content}`]: {
        width: 300,
    },
    [`& .${LoginFormClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${LoginFormClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

LoginForm.propTypes = {
    redirectTo: PropTypes.string,
};
