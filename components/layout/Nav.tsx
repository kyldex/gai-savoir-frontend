import Link from 'next/link';
import styles from './Nav.module.scss';

import { akrobatBlackFont } from '../../utils/fontModule';

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/apropos">À PROPOS</Link>
          </li>
          <li>
            <Link href="/evenements">ÉVÈNEMENTS</Link>
          </li>
          <li className={`${styles["logo"]} ${akrobatBlackFont.className}`}>GAI SAVOIR</li>
          <li>
            <Link href="/audiovisuel">PRODUCTION AUDIOVISUELLE</Link>
          </li>
          <li>
            <Link href="/textes">TEXTES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
