import React from 'react';
import { Backdrop, makeStyles, Theme, Zoom } from '@material-ui/core';
import { RegisterForm } from '../Authentication/RegisterForm';
import { LoginForm } from '../Authentication/LoginForm';
import LinkButton from '../UI/Buttons/LinkButton';

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));
const FormPages = ({ execute, page }: { execute: any, page: string }) => {
  const classes = useStyles()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen hero">
      <Backdrop transitionDuration={0} className={classes.backdrop + ' text-gray-300 flex flex-col'} open={true}>
        <Zoom mountOnEnter unmountOnExit in={true} timeout={{ enter: 600, exit: 400 }}>
          <div className="flex flex-col justify-center mx-2">
            <div className="flex flex-col rounded-md shadow-lg sm:w-full border-box">
              <div className="hero modal-top">
                {page === 'register' ?
                  (
                    <div className="flex flex-row items-center h-8 p-2 m-2 bg-gray-600 rounded-md bg-opacity-5">
                      <LinkButton page="/login" className="flex-1 font-medium text-center text-gray-300 uppercase rounded-md text-md hover:underline model-trans">
                        <span>Login</span>
                      </LinkButton>
                      <h1 className="flex-1 font-bold text-center text-gray-100 uppercase rounded-md cursor-default text-md">Register</h1>
                    </div>
                  ) : (
                      <div className="flex flex-row items-center h-8 p-2 m-2 bg-gray-600 rounded-md bg-opacity-5">
                          <h1 className="flex-1 font-bold text-center text-gray-100 uppercase rounded-md cursor-default text-md">Login</h1>
                          <LinkButton className="flex-1 font-medium text-center text-gray-300 uppercase rounded-md text-md hover:underline model-trans" page="/register">
                            <span>Register</span>
                          </LinkButton>
                      </div>
                  )
                }
              </div>
              <div className="flex flex-col px-8 py-8 bg-gray-800 md:w-96 sm:w-full border-box">
                {page === 'register' ? <RegisterForm /> : <LoginForm />}
              </div>
            </div>
            <div className="flex flex-col justify-center w-full my-2">
              <LinkButton className="self-start flex-1 w-full text-sm text-center text-gray-300 hover:text-gray-200" page="/">
                <span className="text-center">Go back to the home page</span>
              </LinkButton>
            </div>
          </div>
        </Zoom>
      </Backdrop>
    </div>
  );
};

export default FormPages;