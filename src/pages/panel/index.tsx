import React, { useEffect } from 'react';
import Head from '../../components/Layout/Head';
import Dashboard from '../../modules/views/Dashboard/Fullscreen';
import { useResponsive } from '../../modules/hooks/useResponsive';

const Index = () => {
  let media = useResponsive();
  useEffect(() => {

  }, [media])
  
  return (
    <Head title="Panel">
      {(() => {
        switch (media) {
          case '3-cols':
            return <Dashboard />;
          case '2-cols':
            return <></>
          case '1-cols':
            return <></>
          default:
            return <></>;
        }
      })()}
    </Head>
  );
};

export default Index;