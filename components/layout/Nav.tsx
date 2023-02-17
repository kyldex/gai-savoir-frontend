import Link from 'next/link';
import styles from './Nav.module.scss';

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
          <li>
            <Link href="./" className={styles.logo}>
              <div className={styles.logoPart}>
                <span className={styles.logoLetter1}>G</span>
                <span className={styles.logoLetter2}>A</span>
                <span className={styles.logoLetter3}>I</span>
              </div>
              <div className={styles.logoSeparator} />
              <div className={styles.logoPart}>
                <span className={styles.logoLetter4}>S</span>
                <span className={styles.logoLetter5}>A</span>
                <span className={styles.logoLetter6}>V</span>
                <span className={styles.logoLetter7}>O</span>
                <span className={styles.logoLetter8}>I</span>
                <span className={styles.logoLetter9}>R</span>
              </div>
            </Link>
          </li>
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
