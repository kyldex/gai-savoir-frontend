import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';

import Article from '../../data/Article';

import ARTICLES_MOCK from '../../data/articlesMock';

interface Props {
  articles: Article[];
}

const Articles: NextPage<Props> = ({ articles }) => {
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
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: ARTICLES_MOCK
    }
  };
};

export default Articles;
