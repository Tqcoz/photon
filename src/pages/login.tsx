import Head from "../components/Layout/Head";
import {LoginForm} from '../components/Authentication/LoginForm'
import { Backdrop, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }));
const Login = () => {
    const loginFunc = ({email, password}:{email: string, password: string}) => {
        
    }
    const classes = useStyles()
    return (
        <Head title="Login">
            <div className="flex flex-col items-center justify-center min-h-screen hero">
                <Backdrop className={classes.backdrop + ' text-gray-300'} open={true}>
                    <div className="flex flex-col rounded-md shadow-lg w-96 border-box">
                        <div className="hero h-6 modal-top" />
                        <div className="flex flex-col md:w-96 sm:w-full px-8 py-8 bg-gray-800 border-box">
                            <h1 className="font-semibold text-xl">Login</h1>
                            <LoginForm login={loginFunc} />
                        </div>
                    </div>
                </Backdrop>

            </div>
        </Head>
    )


}
export default Login; 