import Link from 'next/link';

import styles from './HomePageLink.module.scss';

const HomePageLink = () => (
  <Link href="/" className={styles.homePageLink}>
    <div className={styles.triangle} />
    <div className={styles.homePageLinkText}>RETOUR ACCUEIL</div>
  </Link>
);

export default HomePageLink;
