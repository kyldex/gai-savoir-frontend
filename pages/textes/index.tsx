import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Textes: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Textes</title>
        <meta name="description" content="Textes du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Textes du Gai Savoir</h1>

      <p className={styles.description}>Textes</p>
    </div>
  );
};

export default Textes;
