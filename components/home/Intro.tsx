import { FC } from 'react';

import { useDeviceContext } from '../../context/DeviceContext';
import MobileIntro from './MobileIntro';

const Intro: FC = () => {
  const { isDesktop } = useDeviceContext();

  return !isDesktop ? <MobileIntro /> : null;
};

export default Intro;
