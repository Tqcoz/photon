import React, { useEffect } from 'react';
import Head from '../../components/Layout/Head';
import DashboardFull from '../../modules/views/Dashboard/Fullscreen';
import { useResponsive } from '../../modules/hooks/useResponsive';
import { useMediaQuery } from '@chakra-ui/react';
import {useState} from 'react';
const Index = () => {
  const [isMediumScreen] = useMediaQuery(["(min-width:700px)"])
  const [isLargeScreen] = useMediaQuery(["(min-width:1200px)"])
  const [isLoading, setLoading] = useState(true)



  return (
    <Head title="Panel">
      {isLoading && (
        <div className="absolute z-10 self-center px-3 py-4 m-auto font-bold bg-gray-600 bg-opacity-50 rounded-md top-48" style={{transform: 'translateY(50)'}}>
          Loading...
        </div>
      )}
      {isLargeScreen ? <DashboardFull /> : (
        <>
          {
            isMediumScreen ? (<h1>medium</h1>) : (<h1>small</h1>)
          }
        </>
      )}
    </Head>
  );
};

export default Index;