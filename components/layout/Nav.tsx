import { useDeviceContext } from '../../context/DeviceContext';
import DesktopMenu from '../menu/DesktopMenu';
import MobileMenuBar from '../menu/MobileMenuBar';

import styles from './Nav.module.scss';

const Nav = () => {
  const { isDesktop } = useDeviceContext();

  return (
    <header className={styles.header}>
      <nav role="navigation" aria-label="Menu principal">
        {isDesktop ? <DesktopMenu /> : <MobileMenuBar />}
      </nav>
    </header>
  );
};

export default Nav;
