import { UserAgent, withUserAgent } from 'next-useragent';
import React, { createContext, memo, ReactChild, useCallback, useContext, useEffect, useState } from 'react';
const _context = createContext({
  operatingSystem: '',
  setOS: null,
} as {
    operatingSystem: string,
    setOS: React.SetStateAction<any>,
})

const OperatingSystem = ({children, ua}:{children: ReactChild, ua?: UserAgent}) => {
  const [operatingSystem, setOS] = useState('')
  useEffect(() =>{
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
      <span data-os/>
      {children}
    </_context.Provider>
  );
};
export const useOperatingSystem = () => useContext(_context).operatingSystem;
export default memo(withUserAgent(OperatingSystem));