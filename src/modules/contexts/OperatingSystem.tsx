import { UserAgent, withUserAgent } from 'next-useragent';
import React, { createContext, ReactChild, useCallback, useContext, useEffect, useState } from 'react';
const _context = createContext({
  operatingSystem: '',
  setOS: null,
} as {
    operatingSystem: string,
    setOS: React.SetStateAction<any>,
})

const OperatingSystem = ({children, ua}:{children: ReactChild, ua?: UserAgent}) => {
  const [operatingSystem, setOS] = useState('')
  let osRef = useCallback(() =>{
      setOS(ua?.os || '')
    //   return setOS('');
    }, [ua])
    useEffect(() =>{
        setOS(ua?.os || '')
        // return setOS('');  
    }, [ua])
    let ContextValue = {
      operatingSystem,
      setOS: (os: string) => setOS(os),
    }
  return (
    <_context.Provider value={ContextValue}>
      <span data-os ref={osRef}/>
      {children}
    </_context.Provider>
  );
};
export const useOperatingSystem = () => useContext(_context).operatingSystem;
export default withUserAgent(OperatingSystem);