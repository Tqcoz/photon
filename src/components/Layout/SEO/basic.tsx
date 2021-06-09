import React from 'react';
import Head from 'next/head';

const Basic = () => {
  const descripton = "Photon is a revolutionary messaging app designed to fit users needs best while still remaining easy to use and customizable, it uses top-tier security protocols to keep you messaging anonymously."
  return (
    <>
      <meta name="theme-color" content={'#f2636d'} />
      <meta name="description" content={descripton} />
      <meta name="keywords" content="messaging,messaging app,client,user messaging,encrypted messaging,photon app,getphotonapp,get photon app,photon messaging,message program,communications,anonymous messaging,fast messaging,photon,getphoton,messaging app,free messaging app,free messaging" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={descripton} />
      <meta property="twitter:description" content={descripton} />
      <meta property="og:site_name" content={'Photon'} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={'Photon'} />
      <meta name={"robots"} content={"index, follow"} />
      <meta property="og:image" content="https://server.getphoton.app/files/logo.png" />

    </>
  );
};

export default Basic;