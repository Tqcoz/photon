import React, { ReducerAction, useEffect, useReducer, useState } from 'react';
import Head from '../components/Layout/Head';
import Link from 'next/link'
import { Button, Container } from '@material-ui/core'
import Navbar from '../components/Layout/Navbar';
import { WithUserAgentProps, withUserAgent, UserAgent } from 'next-useragent'
import { useOperatingSystem } from '../modules/contexts/OperatingSystem';
import { useAuthenticated } from '../modules/contexts/Authentication';
import AuthenticationModals from '../components/UI/AuthenticationModals';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import { Secured } from '../components/Vectors/Secured';
import isOdd from 'is-odd'
import { useResponsive } from '../modules/hooks/useResponsive';
import { Universal } from '../components/Vectors/Universal';
import Footer from '../components/Layout/Footer';
const Index = () => {
  const os = useOperatingSystem()
  const responsive = useResponsive()
  useEffect(() => {
    AOS.init({
      duration: 800
    });
    
  }, []);
  return (
    <Head title="Home">
      <div className="flex-1">
        <div className="hero min-h-screen m-auto flex-1 flex flex-col page pb-18 w-full">
          <Container classes={{ root: 'bg-transparent', }} className="flex flex-1 py-8 flex-col gap-3 p-4 space-y-3" style={{minHeight: '18rem'}}>          
            <Navbar />
            <div className="my-4 w-full h-6" data-spacing />
            <div className="flex flex-col my-4 items-center justify-start md:justify-center flex-1 flex-grow p-4 bg-black rounded-md shadow-lg ring-opacity-20 ring-inset ring-pink-50 ring-2 bg-opacity-5 blur-lg hero-inset py-8" style={{flexGrow: 1}}>
              <div className="px-3 py-5 text-center w-8/12">
                <h3 className="flex-1 my-4 text-4xl font-bold text-center text-white md:text-6xl">
                  A light of hope for better messaging.
                </h3>
                <p className="mb-3 text-base">
                  Photon is a revolutionary chat client designed to fit users needs best while still remaining <u>easy to use</u> and <u>customizable</u>, it uses <u>top-tier security</u> protocols to keep you messaging anonymously. 
                </p>
                <span className="my-3 font-bold" >Did we mention it's free?</span>
              </div>
              <div className="flex flex-row flex-wrap gap-3 my-4 p-2">
                {
                  os === 'Windows' ? <Button className="w-full" color="primary" variant="contained">Download for Windows</Button> : <Button className="w-full" color="primary" variant="contained" disabled>Unsupported Operating System</Button>
                }
                <Button color="secondary" className="w-full" variant="contained">Open Photon</Button>
              </div>
              
            </div>
          </Container>
          <svg fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,64L40,53.3C80,43,160,21,240,16C320,11,400,21,480,64C560,107,640,181,720,213.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,154.7C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        <p className="text-center text-large">Photon is still under major development, landing page is still awaiting many updates.</p>
        <p className="text-center">While we finish up Photon to be ready for beta-access, you may join our temporary <a className="underline" href="https://discord.gg/bwuX2TKKd7">Discord server</a> to know what is happening.</p>
      </div>

      <Footer />
    </Head>
  );
};

export default Index;