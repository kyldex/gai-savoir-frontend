import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import styles from './[slug].module.css';

import Article from '../../data/Article';

import ARTICLES_MOCK from '../../data/articlesMock';

interface Props {
  article: Article;
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{article.attributes.title}</h1>

      <div className={styles.authorInfo}>
        {article.attributes.author}, le {article.attributes.publishedAt}
      </div>

      <p className={styles.content}>{article.attributes.content}</p>
    </div>
  );
};

// This function gets called at build time.
export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on articles.
  const paths = ARTICLES_MOCK.map((article) => ({
    params: { slug: article.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the article `slug`.
  // If the route is like /articles/evenement-decembre, then params.slug is evenement-decembre.
  const article = ARTICLES_MOCK.find((article) => {
    if (params) {
      return article.attributes.slug === params.slug;
    }
  });

  // Pass article data to the page via props.
  return { props: { article } };
};

export default Article;
