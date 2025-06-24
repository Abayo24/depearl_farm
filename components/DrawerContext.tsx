import React, { createContext, useContext, useState } from 'react';

const DrawerContext = createContext<{
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}>({
  isDrawerOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
