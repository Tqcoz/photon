import { Button, makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useState } from 'react';
import { auth, nextAPI } from '../../api';
import {Button as ChakraButton, Popover, PopoverContent, PopoverCloseButton, PopoverBody} from '@chakra-ui/react'
import { useEffect } from 'react';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
export const LoginForm = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    const [support, setSupport] = useState('')

    const [emailFocused, setEmailFocus] = useState(false)
    const [passwordFocused, setPasswordFocus] = useState(false)
    useEffect(() => {
        const testUppercase = new RegExp(
          "^(?=.*[A-Z]).+$"
        );
        if (testUppercase.test(email)) {
            console.log('t');
            
            setSupport('email')
            setEmail(email.toLocaleLowerCase())
        }
        if (password.length == 19) {
            setPassword(password.substr(0, 18))
            setSupport("password")
        }
    }, [email, password])
    const execute = () => {
        setLoading(true)
        nextAPI.post('/login', {
            email,
            password
        }).then(async ({data}) => {
            if (data.success) {
                alert('Successfully logged in!');
            }
        })
        setLoading(false)
    }
    return (
        <form className={classes.root + ' flex flex-col gap-2 md:w-full model-trans'} autoComplete="off" >
            <Popover closeOnEsc returnFocusOnClose closeDelay={2} closeOnBlur={false} isOpen={support !== ""} onClose={() => setSupport('')}>
                <PopoverContent>
                    <PopoverCloseButton />
                    <PopoverBody className="m-3">
                        <p>{support === "email" ? 'The email must be in lowercase.' : "The password must be shorter than 18 characters long!"}</p>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <div className={'flex flex-col w-full py-4 gap-4 border-box items-center model-trans'}>
                <div className="flex flex-col w-full gap-2">
                    <label className={`${emailFocused ? 'text-gray-300' : 'text-gray-400'} modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="email">Email</label>
                    <input value={email} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({ target: { value } }) => setEmail(value)} color="secondary" className="h-8 p-2 text-lg text-gray-300 bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 model-trans" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className={`${passwordFocused ? 'text-gray-300' : 'text-gray-400'} focus:text-gray-200 modal-trans font-semibold`} htmlFor="password">Password</label>
                    <input value={password} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} id="password" onChange={({target: {value}}) => setPassword(value)} color="secondary" type="password" className="h-8 p-2 text-lg text-gray-300 bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 model-trans" />
                </div>
                {loading ? (
                    <ChakraButton onClick={execute} className="w-full" color="primary" variant="solid" isLoading={loading} loadingText="Logging in...">Login</ChakraButton>
                ) : (
                    <Button onClick={execute} className="w-full" color="primary" variant="outlined">Login</Button>
                )}
                <Link href="/forgot">
                    <span className="w-full text-xs text-left text-pink-400 cursor-pointer"><a>Forgot your password?</a></span>
                </Link>
            </div>
        </form>
    )
}