import React from 'react';
import Head from '../components/Layout/Head';
import { Container } from '@material-ui/core'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import {NextPageContext} from 'next'
import { getOs } from '../modules/contexts/OperatingSystem';
import TopBanner from '../components/UI/IndexPage/TopBanner';


const Index = ({os}:{os: string}) => {
  return (
    <Head title="Home">
      <div className="flex-1">
        <div className="flex flex-col flex-1 w-full min-h-screen m-auto hero page pb-18">
          <Container classes={{ root: 'bg-transparent', }} className="flex flex-col flex-1 gap-3 p-4 py-8 space-y-3" style={{minHeight: '18rem'}}>          
            <Navbar />
            <div className="w-full h-6 my-4" data-spacing />
            <TopBanner os={os} />
          </Container>
          <svg fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity="1" d="M0,64L40,53.3C80,43,160,21,240,16C320,11,400,21,480,64C560,107,640,181,720,213.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,154.7C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-3 p-4 py-6">
          <h4 className="py-2 mt-8 text-center text-large">Photon is still under major development, landing page is still awaiting many updates.</h4>
          <h5 className="text-center">While we finish up Photon to be ready for beta-access, you may join our temporary <a className="underline" href="https://discord.gg/bwuX2TKKd7">Discord server</a> to know what is happening.</h5>
        </div>
      </div>

      <Footer />
    </Head>
  );
};
Index.getInitialProps = async ({req}:NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  console.log(getOs(userAgent || ''));
  console.log(userAgent);
  
  return { os: getOs(userAgent || '') }
}
export default Index;