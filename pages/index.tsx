import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gai Savoir Home Page</title>
        <meta name="description" content="Gai Savoir informations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Bienvenue sur le site du Gai Savoir</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  );
};

export default Home;
