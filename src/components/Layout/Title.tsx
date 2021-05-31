import React, { ReactChild, ReactChildren } from 'react';
import Head from 'next/head';

const Title = ({title, children}:{title: string, children: ReactChild}) => {
  return (
    <>
      <title>Photon - {title}</title>
      {children}
    </>
  );
};

export default Title;