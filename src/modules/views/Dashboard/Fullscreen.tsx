import { Container, fade, InputBase, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Head from '../../../components/Layout/Head';
import { HStack } from '@chakra-ui/react';
import { useAuthenticated } from '../../contexts/Authentication';
import Loading from './Loading';

const FullScreen = () => {
  const auth = useAuthenticated()
  return (
    <>
      {auth.authenticated ? (
        <main className="grid grid-cols-3 grid-rows-2 px-3 mt-8">
          <HStack spacing={3}>

          </HStack>
        </main>
      ) : <Loading />}
    </>
  );
};

export default FullScreen;