import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './index.module.scss';

import { ArticleDataById } from '../../types/ArticlesData';
import Article from '../../types/Article';

interface Props {
  article: Article;
}

const Textes: NextPage<Props> = ({ article }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Textes</title>
        <meta name="description" content="Textes du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>{article.attributes.title}</h2>

      <ReactMarkdown className={styles.description}>
        {article.attributes.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Discours évènement
  const articleId = process.env.NODE_ENV === 'production' ? 1 : 5;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles/${articleId}`
  );
  const article: ArticleDataById = await res.json();

  return {
    props: {
      article: article.data
    }
  };
};

export default Textes;
