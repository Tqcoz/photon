import Head from "../components/Layout/Head";
import {LoginForm} from '../components/Authentication/LoginForm'
import { Backdrop, Button, Collapse, makeStyles, Slide, Theme, Zoom } from "@material-ui/core";
import Link from "next/link";
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
                <Backdrop transitionDuration={0}  className={classes.backdrop + ' text-gray-300 flex flex-col'} open={true}>
                    <Slide mountOnEnter unmountOnExit direction={'right'} in={true} timeout={{enter: 600, exit: 400}}>
                        <div>
                            <div className="flex flex-col rounded-md shadow-lg w-96 border-box">
                                <div className="hero modal-top">
                                    <div className="rounded-md m-2 p-2 flex flex-row items-center h-8 bg-gray-600 bg-opacity-5">
                                        <h1 className="uppercase font-bold text-md text-center text-gray-100 rounded-md flex-1 cursor-default">Login</h1>
                                        <Link href="/register">
                                            <a className="uppercase text-gray-200 text-md hover:underline model-trans text-center rounded-md flex-1 font-medium">Register</a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col md:w-96 sm:w-full px-8 py-8 bg-gray-800 border-box">
                                    <LoginForm login={loginFunc} />
                                </div>
                            </div>
                            <div className="w-96">
                                <a href="/" className="text-left hover:text-gray-200 text-gray-300 w-full self-start text-sm">Go back to the home page</a>
                            </div>
                        </div>
                    </Slide>
                </Backdrop>

            </div>
        </Head>
    )


}
export default Login; 