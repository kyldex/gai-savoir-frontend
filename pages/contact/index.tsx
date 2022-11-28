import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contacter l'équipe du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Contact</h1>

      <p className={styles.description}>
        Ariane Ahmadi est la présidente de l&apos;association du Gai Savoir.<br />
        Pour la contacter : mail@gmail.com
      </p>
    </div>
  );
};

export default Contact;
