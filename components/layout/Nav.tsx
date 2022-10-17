import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Gai Savoir</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
