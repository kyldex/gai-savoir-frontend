import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Audiovisuel: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Production audiovisuelle</title>
        <meta name="description" content="Production audiovisuelle du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Production Audiovisuelle</h1>

      <p className={styles.description}>1ère vidéo très bientôt !</p>
    </div>
  );
};

export default Audiovisuel;
