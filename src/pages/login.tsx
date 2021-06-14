import Head from "../components/Layout/Head";
import FormPages from '../components/Layout/FormPages';
const Login = () => {
    const execute = ({email, password}:{email: string, password: string}) => {
        
    }
    return (
        <Head title="Login">
            <FormPages page={'login'} execute={execute} />
        </Head>
    )


}
export default Login; 