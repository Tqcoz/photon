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
                <p className="text-sm text-gray-300 z-10 shadow-md px-4 rounded-md py-2 flex flex-col text-center">
                    Unfortunately, registering is currently disabled, if you want to sign up for beta access, please contact us directly through Discord.
                    <a className="cursor-pointer hover:ring-2 ring-inset modal-trans ring-pink-400 w-full text-center bg-pink-500 p-2 rounded-md my-2" href="/login">Login</a>
                    <a className="cursor-pointer hover:ring-2 ring-inset modal-trans ring-blue-400 w-full text-center bg-blue-500 p-2 rounded-md my-2" href="https://discord.gg/bwuX2TKKd7">Discord Server</a>
                </p>
                <div className="filter blur-sm flex flex-col w-full h-1/3 gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <label className={`text-gray-400 disabled modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="username">Username</label>
                        {/* <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({target: {value}}) => setEmail(value)} color="secondary" className="bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" /> */}
                        <input disabled id="username" color="secondary" className="disabled bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 h-8 p-2 text-lg text-gray-300 model-trans" />
                    </div>
                    
                    
                    <Button className="w-full" disabled color="primary" variant="outlined">Register</Button>
                </div>
            </div>
        </form>
    )
}