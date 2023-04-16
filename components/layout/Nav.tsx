import DesktopMenu from './DesktopMenu';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav>
        <DesktopMenu />
      </nav>
    </header>
  );
};

export default Nav;
