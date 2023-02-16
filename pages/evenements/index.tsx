import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Evenements: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Évènements</title>
        <meta name="description" content="Les évènements du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Les évènements du Gai Savoir</h1>

      <p className={styles.description}>Textes</p>
    </div>
  );
};

export default Evenements;
