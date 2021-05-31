import React, { ReducerAction, useReducer, useState } from 'react';
import Head from '../components/Layout/Head';
import Link from 'next/link'
import { Button, ButtonGroup, Container } from '@material-ui/core'
import Navbar from '../components/Layout/Navbar';
import { WithUserAgentProps, withUserAgent, UserAgent } from 'next-useragent'
import { useOperatingSystem } from '../modules/contexts/OperatingSystem';
import { useAuthenticated } from '../modules/contexts/Authentication';
import AuthenticationModals from '../components/UI/AuthenticationModals';
const Index = () => {
  const [authModalState, setAuthModalState] = useState({
    open: false,
    type: 'login',
  } as {open: boolean, type: 'login' | 'register', switch?: (type: 'login' | 'register') => any}) 
  const os = useOperatingSystem()
  
  return (
    <Head title="Home">
      <div className="hero" >
        <Container classes={{ root: 'bg-transparent', }} className="flex flex-col gap-3 p-4 pb-12 space-y-3" style={{minHeight: '18rem'}}>
          <Navbar authModalState={setAuthModalState} />
          <div className="my-4 w-full h-6" data-spacing />
          <div className="flex flex-col items-center justify-start md:justify-center flex-1 flex-grow h-full p-4 bg-black rounded-md shadow-lg ring-opacity-20 ring-inset ring-pink-50 ring-2 bg-opacity-5 blur-lg hero-inset py-6" style={{flexGrow: 1}}>
            <div className="px-3 py-5 text-center w-8/12">
              <h1 className="flex-1 my-4 text-4xl font-bold text-center text-white md:text-6xl">
                A light of hope for better messaging.
              </h1>
              <p className="mb-3 text-base">
                Photon is a revolutionary chat client designed to fit users needs best while still remaining <u>easy to use</u> and <u>customizable</u>, it uses <u>top-tier security</u> protocols to keep you messaging anonymously.   
              </p>
              <span className="my-3 font-bold" >Did we mention it's free?</span>
            </div>
            <div className="flex flex-row flex-wrap flex-1 gap-3 my-4">
              {
                os === 'Windows' ? <Button color="primary" variant="contained">Download for Windows</Button> : <Button color="primary" variant="contained" disabled>Unsupported Operating System</Button>
              }
              <Button color="secondary" variant="contained">Open Photon</Button>
            </div>
          </div>
        </Container>
      </div>
      <AuthenticationModals switchType={(type: 'login' | 'register') => setAuthModalState({...authModalState, type})} {...authModalState} close={() => setAuthModalState({open: false, type: authModalState.type})} />
    </Head>
  );
};

export default Index;