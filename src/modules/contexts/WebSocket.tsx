import { Socket, io } from 'socket.io-client';
import React, { createContext, ReactChild, SetStateAction, useContext, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Dispatch } from 'react';
import Head from '../../components/Layout/Head';
const SocketContext = createContext({
  socket: {} as Socket,
  connected: false,
  handler: {} 
} as {
  socket: Socket,
  connected: boolean,
  handler: object
})

export const AscentProvider = ({children}:{children: ReactChild}) => {
  const [socket, _setSocket]:[socket: Socket, setSocket: Dispatch<SetStateAction<Socket>>] = useState(io("https://server.getphoton.app/socket"));

  let ContextValue = {
    socket,
    connected: socket.connected,
    handler: {}
  }
  return (
    <SocketContext.Provider value={ContextValue}>
      {socket.connected ? (
        <Head title="Disconnected">
          <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900">
            <div className="flex flex-col p-5 rounded-lg w-80 ring-opacity-50 ring-1 ring-pink-700">
              <Button className="w-full my-2 text-pink-300 bg-pink-500 select-none" variant="solid" size="md" isLoading={true} blur={0} loadingText="Reconnecting...">Reconnecting...</Button>
              <h4 className="my-2 font-bold text-center">
                You're currently disconnected from Photon.
              </h4>
              <p className="text-sm text-gray-500">
                This is either because you are not connected to the internet or a problem with our server!
              </p>
            </div>
          </div>
        </Head>
      ): (
        <div>
          <span data-os/>
          {children}
        </div>
      )}
    </SocketContext.Provider>
  );
};
const useAscent = () => useContext(SocketContext)
export default useAscent;