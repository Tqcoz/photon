import { Button, FormControl, FormGroup, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import Link from 'next/link';
import ReCAPTCHA from "react-google-recaptcha";
import React, { memo, useEffect, useRef, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { auth } from '../../../api';
import { handleAuthRegisterResponse } from '../../../modules/functions/auth';
declare global {
    interface Window{
        captchaSubmit: (token: string) => void
    }
}
interface RegisterProps {
    switchType: (type: 'login' | 'register') => any
    
}
const useStyles = makeStyles((theme: Theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
const Register: React.FC<RegisterProps> = memo(({switchType}) => {
    const classes = useStyles();
    const [error, setError] = useState([] as string[])
    const [_token, setToken] = useState('')
    const [formDetails, updateForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const { executeRecaptcha } = useGoogleReCaptcha();
    const getToken = () =>{
        executeRecaptcha("submit").then((token: string) => console.log(token)
        );
        
    }
    const submitRegisterForm = () => {
        getToken();
        auth.post('/register', {
            username: formDetails.username,
            email: formDetails.email,
            password: formDetails.password,
            captcha: _token
        })
            .then(handleAuthRegisterResponse)
            .catch(() => setError(['An error occured, please make sure all of the input fields are filled out correctly!', 'aids']))
    }
    return (
        <div className="modal-trans">
            <GoogleReCaptcha
                onVerify={(token: string) => {
                setToken(token);
            }}
            />
            <div className="bg-red-700 rounded-md modal text-center model-trans">
                <h1 className="text-3xl font-bold">Welcome to Photon!</h1>
                <form className={classes.root + ' flex flex-col gap-2 w-full'} autoComplete="on" >
                    <FormGroup className={'w-full py-4 gap-4'}>
                        <div className="text-red-400 w-full flex flex-col gap-2">{error.map((err) => <span>{err}</span>)}</div>
                        <FormControl classes={{root: 'w-full gap-4'}}>
                            <TextField value={formDetails.username} onChange={({target: {value}}) => updateForm(f => ({...f, username: value}))} autoComplete="off" id="username" color="secondary" className="textField" label="Username" variant="standard" />
                            <TextField value={formDetails.email} onChange={({target: {value}}) => updateForm(f => ({...f, email: value}))} id="email" color="secondary" type="email" className="textField" label="Email" variant="standard" />
                            <TextField value={formDetails.password} onChange={({target: {value}}) => updateForm(f => ({...f, password: value}))} id="password" color="secondary" type="password" className="textField" label="Password" variant="standard" />
                        </FormControl>
                        <Button onClick={submitRegisterForm} color="primary" variant="outlined">Register</Button>
                        <a onClick={() => switchType('login')} className="cursor-pointer hover:underline">Already have an account?</a>
                    </FormGroup>
                </form>
            </div>
        </div>
    );
});

export default Register;