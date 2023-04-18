import { useDeviceContext } from '../../context/DeviceContext';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import styles from './Nav.module.scss';

const Nav = () => {
  const { isDesktop } = useDeviceContext();

  return (
    <header className={styles.header}>
      <nav role="navigation" aria-label="Menu principal">
        {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      </nav>
    </header>
  );
};

export default Nav;
