import Link from 'next/link';

import styles from './DesktopMenu.module.scss';

const DesktopMenu = () => {
  return (
    <ul className={styles.desktopMenu}>
      <li>
        <Link href="/evenements">ÉVÈNEMENTS</Link>
      </li>
      <li>
        <Link href="/production-audiovisuelle">PRODUCTION AUDIOVISUELLE</Link>
      </li>
      <li>
        <Link href="/idees">IDÉES</Link>
      </li>
      <li>
        <Link href="/contributeurs">CONTRIBUTEURS</Link>
      </li>
      <li>
        <Link href="/observatoire-des-perceptions">
          OBSERVATOIRE DES PERCEPTIONS
        </Link>
      </li>
      <li>
        <Link href="/apropos">À PROPOS</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
