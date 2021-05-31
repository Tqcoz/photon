import { Backdrop, makeStyles, Modal, Slide, Theme, Zoom } from '@material-ui/core';
import React, { memo, useCallback } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Login from '../Modals/Authentication/Login';
import Register from '../Modals/Authentication/Register';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
    },
    photonAUTHMODAL: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-4em',
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
    },
}))
interface AuthenticationModalsProps {
    open: boolean
    type: 'login' | 'register'
    close: () => any,
    switchType: (type: 'login' | 'register') => any
}

const AuthenticationModals: React.FC<AuthenticationModalsProps> = ({open, type, close, switchType}) => {
    const classes = useStyles();
    let closeModal = useCallback(() => {
        close()
    }, [open])
    const container = React.useRef(null);
    return (
        <GoogleReCaptchaProvider reCaptchaKey={"6LfSO8UaAAAAAAorcfQSqTqhO-gokeTDC5Qbpq3X"}>
            <div className={classes.root} ref={container}>
                <Modal
                    aria-labelledby="photon-modal-title"
                    aria-describedby="photon-modal-description"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 400,
                    }}
                    onClose={closeModal}
                    disableAutoFocus  className={"flex flex-col justify-center items-center h-screen w-screen" + " " + classes.photonAUTHMODAL} open={open} onBackdropClick={closeModal}>
                        <Zoom in={open}>
                            <div className="modal-trans">
                                    {type === 'login' ? <Login switchType={switchType} /> : <Register switchType={switchType} /> }

                            </div>
                        </Zoom>

                </Modal>
            </div>
        </GoogleReCaptchaProvider>
    );
};

export default memo(AuthenticationModals);