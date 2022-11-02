import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';

import Article from '../../types/Article';
import { ArticlesData } from '../../types/ArticlesData';

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
              <Link href={`/articles/${article.attributes.slug}`}>
                {article.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`);
  const articles: ArticlesData = await res.json();

  return {
    props: {
      articles: articles.data
    }
  };
};

export default Articles;
