import Link from 'next/link';

import styles from './DesktopMenu.module.scss';

const DesktopMenu = () => {
  return (
    <ul className={styles.desktopMenu}>
      <li>
        <Link href="/evenements">ÉVÈNEMENTS</Link>
      </li>
      <li>
        <Link href="/audiovisuel">PRODUCTION AUDIOVISUELLE</Link>
      </li>
      <li>
        <Link href="/textes">IDÉES</Link>
      </li>
      <li>
        <Link href="/textes">CONTRIBUTEURS</Link>
      </li>
      <li>
        <Link href="/textes">OBSERVATOIRE DES PERCEPTIONS</Link>
      </li>
      <li>
        <Link href="/apropos">À PROPOS</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
