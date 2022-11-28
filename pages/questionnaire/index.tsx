import type { NextPage } from 'next';
import Head from 'next/head';
import Survey from '../../components/survey';
import styles from './index.module.css';

const SurveyPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Questionnaire</title>
        <meta name="description" content="Questionnaire du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Questionnaire</h1>

      <p className={styles.description}>
        Prenez quelques minutes pour répondre au questionnaire ! Toutes vos réponses restent anonymes.
      </p>

      <Survey />
    </div>
  );
};

export default SurveyPage;
