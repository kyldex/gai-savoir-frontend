import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './[id].module.css';

const Article: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Article</title>
        <meta name="description" content="Un article du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{router.query.id}</h1>

      <p className={styles.description}>Détails article</p>
    </div>
  );
};

export default Article;
