import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

const Textes: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Textes</title>
        <meta name="description" content="Textes du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Textes</h2>

      <div className={styles.description}>
        <p className={styles.descriptionPart}>Gai Savoir discours</p>
      </div>
    </div>
  );
};

export default Textes;
