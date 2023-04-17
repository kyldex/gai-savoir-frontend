import { useDeviceContext } from '../../context/DeviceContext';
import DesktopMenu from './DesktopMenu';

import styles from './Nav.module.scss';

const Nav = () => {
  const { isDesktop } = useDeviceContext();

  return (
    <header className={styles.header}>
      <nav>{isDesktop ? <DesktopMenu /> : <div>Hello mobile menu</div>}</nav>
    </header>
  );
};

export default Nav;
