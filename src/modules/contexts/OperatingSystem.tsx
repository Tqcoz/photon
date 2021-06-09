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
export function getOs (userAgent: string) {

  var userAgent = userAgent.toLowerCase();

  var os = "Unknown OS Platform";

  let match = ["windows nt 10","windows nt 6.3","windows nt 6.2","windows nt 6.1","windows nt 6.0","windows nt 5.2","windows nt 5.1","windows xp","windows nt 5.0","windows me","win98","win95","win16","macintosh","mac os x","mac_powerpc","android","linux","ubuntu","iphone","ipod","ipad","blackberry","webos"];
  let result = ["Windows 10","Windows 8.1","Windows 8","Windows 7","Windows Vista","Windows Server 2003/XP x64","Windows XP","Windows XP","Windows 2000","Windows ME","Windows 98","Windows 95","Windows 3.11","Mac OS X","Mac OS X","Mac OS 9","Android","Linux","Ubuntu","iPhone","iPod","iPad","BlackBerry","Mobile"];

  for (var i = 0; i < match.length; i++) {
    if (userAgent.indexOf(match[i]) !== -1) {
      os = result[i];
      break;
    }

  }

  return os;
}