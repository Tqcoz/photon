import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { useAuthenticated } from '../../../modules/contexts/Authentication';
import LinkButton from '../Buttons/LinkButton';

const TopBanner = ({ os }: { os: string }) => {
  const {authenticated} = useAuthenticated()
  return (
    <div className="flex flex-col items-center justify-start flex-1 flex-grow p-4 py-8 my-4 bg-black rounded-md shadow-lg md:justify-center ring-opacity-20 ring-inset ring-pink-50 ring-2 bg-opacity-5 blur-lg hero-inset" style={{flexGrow: 1}}>
      <div className="px-3 py-5 text-center sm:w-8/12">
        <h1 className="flex-1 my-4 text-4xl font-bold text-center text-white md:text-6xl">
          A ray of hope <br/> for better communication
        </h1>
        <div className="flex flex-col items-center justify-center flex-1">
          <p className="w-8/12 mb-3 text-lg text-center">
            Photon is a revolutionary chat client designed to fit users needs best while still remaining <u>easy to use</u> and <u>customizable</u>, it uses <u>top-tier security</u> protocols to keep you messaging anonymously. 
          </p>
        </div>
        <h2 className="my-3 font-bold" >Did we mention it's free?</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-3 p-2 my-4" >
        {
          os.includes('Windows') ? <Button className="w-full" w={"full"} variant="solid">Download for Windows</Button> : <Button className="w-full" color="primary" variant="ghost" disabled>Unsupported Operating System</Button>
        }
        {
          authenticated ? <Button className="w-full" colorScheme="cyan" size="md" variant="outline">Open Photon</Button> : <Button className="w-full text-gray-400" colorScheme="pink" size="md" variant="solid"><LinkButton page="/register">Sign Up</LinkButton></Button>
        }
      </div>
      
    </div>
  );
};

export default TopBanner;