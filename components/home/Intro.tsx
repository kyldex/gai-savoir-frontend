import { FC } from 'react';

import { useDeviceContext } from '../../context/DeviceContext';
import MobileIntro from './MobileIntro';
import DesktopIntro from './DesktopIntro';

const Intro: FC = () => {
  const { isDesktop } = useDeviceContext();

  return !isDesktop ? <MobileIntro /> : <DesktopIntro />;
};

export default Intro;
