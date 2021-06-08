import { Button, FormControl, FormGroup, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
export const LoginForm = ({login}:{login: ({}:{email: string, password: string}) => any}) => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailFocused, setEmailFocus] = useState(false)
    const [passwordFocused, setPasswordFocus] = useState(false)

    return (
        <form className={classes.root + ' flex flex-col gap-2 md:w-full model-trans'} autoComplete="off" >
            <div className={'flex flex-col w-full py-4 gap-4 border-box items-center model-trans'}>
                <div className="flex flex-col gap-2 w-full">
                    <label className={`${emailFocused ? 'text-gray-300' : 'text-gray-400'} modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="email">Email</label>
                    <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({target: {value}}) => setEmail(value)} color="secondary" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className={`${passwordFocused ? 'text-gray-300' : 'text-gray-400'} focus:text-gray-200 modal-trans font-semibold`} htmlFor="password">Password</label>
                    <input onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} id="password" onChange={({target: {value}}) => setPassword(value)} color="secondary" type="password" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                </div>
                <Button onClick={() => login({email, password})} className="w-full" color="primary" variant="outlined">Login</Button>
                <a className="cursor-pointer hover:underline w-full" href="/register">Don't have an account?</a>
                <Link href="/forgot">
                    <span className="text-left text-xs text-pink-400 cursor-pointer w-full"><a>Forgot your password?</a></span>
                </Link>
            </div>
        </form>
    )
}