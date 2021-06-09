import { Button, Divider, Drawer, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { useNavDrawer } from '../../modules/contexts/Drawer';

const NavigationDrawer = () => {
  const {drawerOpened, close} = useNavDrawer()
  return (
    <Drawer variant="persistent" classes={{paper: 'navDrawer p-4 flex flex-col gap-2 px-6 items-center z-10', root: 'sticky'}} anchor="right" elevation={0} open={drawerOpened}>
      <div className="flex flex-row items-center">
        <h1 className="flex-1 text-xl text-center">Photon</h1>
        <IconButton onClick={close}>
          <ArrowBack />
        </IconButton>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <Divider />
        <Button className="" href="/privacy" color="secondary" variant="outlined">
          <span className="self-center text-center hover:underline hover:cursor-pointer">
            Privacy
          </span>
        </Button>
        <Button className="" href="/faq" color="secondary" variant="outlined">
          <span className="self-center text-center hover:underline hover:cursor-pointer">
            FAQ
          </span>
        </Button>
        <Button className="" href="/downloads" color="secondary" variant="outlined">
          <span className="self-center text-center hover:underline hover:cursor-pointer">
            Downloads
          </span>
        </Button>
      </div>
      <span className="flex-1"></span>
      <Button color="secondary" variant="contained">Open Photon</Button>
    </Drawer>
  );
};

export default NavigationDrawer;