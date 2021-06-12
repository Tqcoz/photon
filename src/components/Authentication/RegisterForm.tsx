import { Button, makeStyles, Theme } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));
export const RegisterForm = () => {
    const classes = useStyles()
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const [emailFocused, setEmailFocus] = useState(false)
    // const [passwordFocused, setPasswordFocus] = useState(false)

    return (
        <form className={classes.root + ' flex flex-col gap-2 md:w-full model-trans'} autoComplete="off" >
            <div className={'flex flex-col w-full py-4 gap-4 border-box items-center model-trans'}>
                <p className="z-10 flex flex-col px-4 py-2 text-sm text-center text-gray-300 rounded-md shadow-md">
                    Unfortunately, registering is currently disabled, if you want to sign up for beta access, please contact us directly through Discord.
                    <Link href="/login">
                        <span className="w-full p-2 my-2 font-bold text-center bg-pink-500 rounded-md cursor-pointer hover:ring-2 ring-inset modal-trans ring-pink-400">Login</span>
                    </Link>
                    <a className="w-full p-2 my-2 text-center bg-indigo-500 rounded-md cursor-pointer hover:ring-2 ring-inset modal-trans ring-indigo-400" href="https://discord.gg/bwuX2TKKd7">Discord Server</a>
                </p>
                <div className="flex flex-col w-full gap-2 filter blur-sm h-1/3">
                    <div className="flex flex-col w-full gap-2">
                        <label className={`text-gray-400 disabled modal-trans focus:text-gray-200 font-semibold flex-1 text-left`} htmlFor="username">Username</label>
                        {/* <input onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} autoFocus={true} type="email" id="email" onChange={({target: {value}}) => setEmail(value)} color="secondary" className="h-8 p-2 text-lg text-gray-300 bg-gray-700 rounded-md ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 model-trans" /> */}
                        <input disabled id="username" color="secondary" className="h-8 p-2 text-lg text-gray-300 bg-gray-700 rounded-md disabled ring-2 focus:ring-gray-500 focus:h-10 ring-gray-600 model-trans" /> 
                    </div>
                    
                    
                    <Button className="w-full" disabled color="primary" variant="outlined">Register</Button>
                </div>
            </div>
        </form>
    )
}