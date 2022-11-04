import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './[slug].module.css';

import Article from '../../types/Article';
import { ArticlesData, ArticleData } from '../../types/ArticlesData';

interface Props {
  article: Article;
}

const Article: NextPage<Props> = ({ article }) => {
  if (article.id === 'not_found') {
    return (
      <p className={styles.content}>
        Désolé, nous n&apos;avons pas pu trouver cet article.
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{article.attributes.title}</h1>

      <div className={styles.authorInfo}>
        {article.attributes.author}, le {article.attributes.published}
      </div>

      <ReactMarkdown className={styles.content}>
        {article.attributes.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`);
  const articles: ArticlesData = await res.json();

  // Get the paths we want to pre-render based on articles.
  const paths = articles.data.map((article) => ({
    params: { slug: article.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const { slug } = params;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles?filters[slug][$eq]=${slug}`
    );
    const article: ArticleData = await res.json();

    // Pass article data to the page via props.
    return { props: { article: article.data[0] } };
  }

  return { props: { article: { id: 'not_found' } } };
};

export default Article;
