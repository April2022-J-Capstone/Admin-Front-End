import * as React from 'react';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';

import { ResetPasswordForm } from '../components/ResetPasswordForm';

export const ResetPassword = (props) => {
    const { children, backgroundImage, ...rest } = props;
    const containerRef = useRef();
    let backgroundImageLoaded = false;

    const updateBackgroundImage = () => {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };

    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = () => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };

    useEffect(() => {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (
        <Root {...rest} ref={containerRef}>
            <Card className={ResetPasswordClasses.card}>
                <div className={ResetPasswordClasses.avatar}>
                    <Avatar className={ResetPasswordClasses.icon}>
                        <LockIcon />
                    </Avatar>
                </div>
                {children}
            </Card>
        </Root>
    );
};

const PREFIX = 'RaResetPassword';
export const ResetPasswordClasses = {
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`,
};

const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
        'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',

    [`& .${ResetPasswordClasses.card}`]: {
        minWidth: 300,
        marginTop: '6em',
    },
    [`& .${ResetPasswordClasses.avatar}`]: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${ResetPasswordClasses.icon}`]: {
        backgroundColor: theme.palette.secondary[500],
    },
}));

ResetPassword.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

ResetPassword.defaultProps = {
    children: <ResetPasswordForm />,
};
