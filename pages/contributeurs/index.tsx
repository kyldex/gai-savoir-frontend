import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';

const ContributeursPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contributeurs</title>
        <meta name="description" content="Gai Savoir - Contributeurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>Contributeurs</h1>

      <p className={styles.description}>
        La liste des contributeurs sera publiée très bientôt.
      </p>
    </div>
  );
};

export default ContributeursPage;
