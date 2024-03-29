import type { NextPage } from 'next';
import Head from 'next/head';
import Survey from '../../components/survey';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';

const SurveyPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Observatoire des perceptions</title>
        <meta
          name="description"
          content="Gai Savoir - Observatoire des perceptions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>Observatoire des perceptions</h1>

      <p className={styles.description}>
        L&apos;observatoire des perceptions est un concept unique qui vise à
        récolter les représentations des français et créer de la data autour du
        populaire.
        <br />
        Stay tuned, ça arrive vite.
      </p>

      {/* <Survey /> */}
    </div>
  );
};

export default SurveyPage;
