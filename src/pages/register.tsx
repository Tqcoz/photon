import Head from "../components/Layout/Head";
import FormPages from '../components/Layout/FormPages';
const Register = () => {
    const execute = ({username, email, password}:{username: string, email: string, password: string}) => {
        
    }
    return (
        <Head title="Register">
            <FormPages page={'register'} execute={execute} />
        </Head>
    )


}
export default Register; 