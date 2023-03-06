import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './[slug].module.scss';

import Article from '../../types/Article';
import { ArticlesData, ArticleDataBySlug } from '../../types/ArticlesData';

interface Props {
  article: Article;
  preview: boolean;
}

const Article: NextPage<Props> = ({ article, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <div>I'm in preview mode !</div>}

      <h2 className={styles.title}>{article.attributes.title}</h2>

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

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Article not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  const isInPreviewMode = preview ? true : false;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}`
  );
  const articleData: ArticleDataBySlug = await res.json();

  // Pass article data to the page via props.
  return { props: { article: articleData.data[0], preview: isInPreviewMode } };
};

export default Article;
