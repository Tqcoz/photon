import { Button, FormControl, FormGroup, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import Link from 'next/link';
import React, { memo, useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';
interface LoginProps {
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
const Login = ({switchType}:LoginProps) => {
    console.log(switchType);
    
    const classes = useStyles()
    const [details, setDetails] = useState({
        email: '',
        password: '',
        typing: 'none'
    })
    const emailElement = useRef(null);
    const passwordElement = useRef(null);
    useEffect(() => {

    }, [])
    return (
        <div className="modal-trans">
            <div className="bg-red-700 rounded-md modal text-center model-trans items-center flex flex-col">
                <h1 className="text-3xl font-bold">Welcome back!</h1>
                <form className={classes.root + ' flex flex-col gap-2 w-5/6 md:w-full model-trans'} autoComplete="on" >
                    <FormGroup className={'w-full py-4 gap-4 model-trans'}>
                        <FormControl classes={{root: 'w-full gap-4'}}>
                            <TextField color="secondary" className="textField" label="Email" variant="standard" />
                            <TextField color="secondary" className="textField" label="Password" variant="standard" />
                        </FormControl>
                        <Link href="/forgot">
                            <span className="text-right text-xs"><a>Forgot your password?</a></span>
                        </Link>
                        <Button color="primary" variant="outlined">Login</Button>
                        <a className="cursor-pointer hover:underline" onClick={() => switchType('register')}>Don't have an account?</a>
                    </FormGroup>
                </form>
            </div>
        </div>

    );
};

export default Login;