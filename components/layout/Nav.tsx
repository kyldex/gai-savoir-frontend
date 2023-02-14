import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Gai Savoir
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/questionnaire">Questionnaire</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
