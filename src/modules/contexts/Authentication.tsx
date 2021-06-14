import Cookies from 'js-cookie';
import { UserAgent, withUserAgent } from 'next-useragent';
import React, { createContext, ReactChild, useCallback, useContext, useEffect, useState } from 'react';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { api, auth } from '../../api';
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

const AuthContext = ({ children, ua }: { children: ReactChild, ua?: UserAgent }) => {
  const [authenticated, setAuthState] = useState(false)
  const [user, setUser] = useState({} as User)
  let [accessToken, setAccessToken]:[string | false, Dispatch<SetStateAction<string | false>>] = useState(Cookies.get('token') || false);
  let [refreshToken, setRefreshToken]:[string | false, Dispatch<SetStateAction<string | false>>] = useState(Cookies.get('refresh') || false);
  
  useEffect(() => {
    if (accessToken && refreshToken) {
      Cookies.set('token', accessToken)
      Cookies.set('refresh', refreshToken)
    } else {
      Cookies.remove('token')
      Cookies.remove('refresh')
    }
  }, [accessToken, refreshToken])

  const login = () => {
    if (!accessToken) {
      if (refreshToken) {
        refresh()
      }
    }
    api().get(`/me?token=${accessToken}`).then((userReq) => {
      setUser(userReq.data.user)
    })
    setAuthState(Boolean(user))
    
  }
  const logout = () => {
    setAuthState(false)
    setAccessToken(false)
    setRefreshToken(false)
  }
  let ContextValue = {
    login,
    logout,
    authenticated
  }
  const refresh = () => {
    auth.post('/token', {
      'grant_type': 'refresh',
      code: refreshToken
    })
      .then((tokenData) => {
        setAccessToken(tokenData.data.accessToken)
        setRefreshToken(tokenData.data.refreshToken)
      })
      .catch(() => {
        // handle error
      })
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