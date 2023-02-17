import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

const Evenements: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Évènements</title>
        <meta name="description" content="Les évènements du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Les évènements</h2>

      <div className={styles.description}>
        <p className={styles.descriptionPart}>Disours</p>
      </div>
    </div>
  );
};

export default Evenements;
