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
  let [accessToken, setAccessToken] = useState(Cookies.get('token'));
  let [refreshToken, setRefreshToken] = useState(Cookies.get('refresh'));
  
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
    api().get(`/me?token=${accessToken}`)
    setAuthState(Boolean(user))
    
  }
  const logout = () => {
    setAuthState(false)
    setToken
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