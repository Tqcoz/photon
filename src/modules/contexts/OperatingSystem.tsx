import { UserAgent, withUserAgent } from 'next-useragent';
import React, { createContext, memo, ReactChild, useCallback, useContext, useEffect, useState } from 'react';
const _context = createContext({
  operatingSystem: '',
  setOS: null,
} as {
    operatingSystem: string,
    setOS: React.SetStateAction<any>,
})

const OperatingSystem = ({children}:{children: ReactChild}) => {
  const [operatingSystem, setOS] = useState('')
  useEffect(() => {
    setOS(getOS() || '')
  }, [])
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
export default memo(OperatingSystem);
export function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}