import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';

const Articles: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Les articles du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Nos articles</h1>

      <div className={styles.list}>
        <ul>
          <li>
            <Link href="/articles/hello">Hello</Link>
          </li>
          <li>
            <Link href="/articles/world">World</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Articles;
