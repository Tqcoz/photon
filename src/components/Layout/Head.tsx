import React, { ReactFragment } from 'react';
import Basic from './SEO/basic';
import Title from './Title';
import NextHead from 'next/head'
const Head = ({title, children}:{title: string, children: ReactFragment}) => {
  return (
    <div>
      <NextHead>
        <title>Photon - {title}</title>
        <Basic />
      </NextHead>
      {children}
    </div>
  );
};

export default Head;