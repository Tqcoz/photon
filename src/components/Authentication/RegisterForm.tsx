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
export const RegisterForm = ({login}:{login: ({}:{email: string, password: string}) => any}) => {
    const classes = useStyles()
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const [emailFocused, setEmailFocus] = useState(false)
    // const [passwordFocused, setPasswordFocus] = useState(false)

    return (
        <form className={classes.root + ' flex flex-col gap-2 md:w-full model-trans'} autoComplete="off" >
            <div className={'flex flex-col w-full py-4 gap-4 border-box items-center model-trans'}>
                <div className="flex flex-col gap-2 w-full">
                    <label className={`text-gray-400 disabled modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="username">Username</label>
                    {/* <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({target: {value}}) => setEmail(value)} color="secondary" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" /> */}
                    <input disabled id="username" color="secondary" className="disabled bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className={`text-gray-400 disabled modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="email">Email</label>
                    {/* <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({target: {value}}) => setEmail(value)} color="secondary" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" /> */}
                    <input disabled type="email" id="email" color="secondary" className="disabled bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className={`text-gray-400 disabled focus:text-gray-200 modal-trans font-semibold`} htmlFor="password">Password</label>
                    {/* <input onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} id="password" onChange={({target: {value}}) => setPassword(value)} color="secondary" type="password" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" /> */}
                    <input id="password" disabled color="secondary" type="password" className="disabled bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                </div>
                <Button className="w-full" disabled color="primary" variant="outlined">Login</Button>
                <a className="cursor-pointer hover:underline w-full" href="/login">Already have an account?</a>
                <p className="text-sm text-gray-300">Unfortunately registering is currently disabled, if you want to sign up for beta access, please contact us directly. </p>
            </div>
        </form>
    )
}