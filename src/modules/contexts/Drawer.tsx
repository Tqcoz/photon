import React, { createContext, ReactChild, useContext, useState } from 'react';
const _context = createContext({
  drawerOpened: false,
  open: null,
  close: null
} as {
  drawerOpened: boolean,
  open: React.SetStateAction<any>,
  close: React.SetStateAction<any>
})

const NavigationDrawer = ({children}:{children: ReactChild}) => {
  const [isOpen, setDrawerOpen] = useState(false)
  let ContextValue = {
    drawerOpened: isOpen,
    open: () => setDrawerOpen(true),
    close: () => setDrawerOpen(false)
  }
  return (
    <_context.Provider value={ContextValue}>
      {children}
    </_context.Provider>
  );
};
export const useNavDrawer = () => useContext(_context);
export default NavigationDrawer;