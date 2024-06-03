'use client';

import { createContext, FC, ReactNode, useContext } from 'react';
import useMediaQuery from '../utils/hooks/useMediaQuery';
import breakpoints from '../utils/breakpoints';

type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const DeviceContext = createContext<DeviceContextType | undefined>(
  undefined
);

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (typeof context === 'undefined') {
    throw new Error(
      'useDeviceContext must be used within a DeviceProvider with initialized values.'
    );
  }
  return context;
};

type Props = {
  children?: ReactNode;
};

export const DeviceProvider: FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.sm - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg - 1}px)`
  );
  const isDesktop = !isMobile && !isTablet;

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
