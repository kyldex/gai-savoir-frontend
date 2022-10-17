import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Gai Savoir</div>
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
