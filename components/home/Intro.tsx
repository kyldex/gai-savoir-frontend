'use client';

import { FC } from 'react';

import { useDeviceContext } from '../../context/DeviceContext';
import useHasMounted from '../../utils/hooks/useHasMounted';
import MobileIntro from './MobileIntro';
import DesktopIntro from './DesktopIntro';

/**
 * Client component that renders the appropriate intro based on device type.
 * Uses useHasMounted to prevent hydration mismatches since useMediaQuery
 * returns false during SSR but may return true on the client.
 */
const Intro: FC = () => {
  const { isDesktop } = useDeviceContext();
  const hasMounted = useHasMounted();

  // Wait for client-side mount to avoid hydration mismatch
  if (!hasMounted) {
    return null;
  }

  return !isDesktop ? <MobileIntro /> : <DesktopIntro />;
};

export default Intro;
