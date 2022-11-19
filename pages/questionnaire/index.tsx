import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';

const Survey: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Questionnaire</title>
        <meta name="description" content="Questionnaire du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Questionnaire</h1>

      <div className={styles.list}>
      </div>
    </div>
  );
};

export default Survey;
