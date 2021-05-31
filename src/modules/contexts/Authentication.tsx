import { UserAgent, withUserAgent } from 'next-useragent';
import React, { createContext, ReactChild, useCallback, useContext, useEffect, useState } from 'react';
import { User } from '../interfaces/User';
const _context = createContext({
  authenticated: false,
  login: null,
} as {
    authenticated: boolean,
    login: React.SetStateAction<any>,
})
const userContext = createContext({
} as User)

const AuthContext = ({children, ua}:{children: ReactChild, ua?: UserAgent}) => {
  const [authenticated,  setAuthState] = useState(false)
  const [user,  setUser] = useState({} as User)
  const login = (userData: User) => {
    setAuthState(Boolean(user))
    setUser(userData)
  }
  let ContextValue = {
    login,
    authenticated
  }
  
  return (
    <_context.Provider value={ContextValue}>
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    </_context.Provider>
  );
};
export const useAuthenticated = () => useContext(_context);
export const useUser = () => useContext(userContext);
export default AuthContext;