import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.scss';

const Audiovisuel: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Production audiovisuelle</title>
        <meta name="description" content="Production audiovisuelle du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>PRODUCTION AUDIOVISUELLE</h1>

      <div className={styles.description}>
        <p className={styles.descriptionPart}>1ère vidéo très bientôt !</p>
      </div>
    </div>
  );
};

export default Audiovisuel;
