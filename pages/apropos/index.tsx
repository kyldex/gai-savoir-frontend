import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Apropos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>À propos</title>
        <meta name="description" content="À propos du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>À propos</h1>

      <p className={styles.description}>Textes</p>
    </div>
  );
};

export default Apropos;
