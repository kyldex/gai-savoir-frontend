import Link from 'next/link';

import styles from './HomePageLink.module.scss';

const HomePageLink = () => (
  <Link href="/" className={styles.homePageLink}>
    <div className={styles.triangle} />
    <div className={styles.homePageLinkText}>Retour à l&apos;accueil</div>
  </Link>
);

export default HomePageLink;
