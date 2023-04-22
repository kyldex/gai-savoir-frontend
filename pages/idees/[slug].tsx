import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './[slug].module.scss';

import Idea from '../../types/Idea';
import { IdeasData, IdeaDataBySlug } from '../../types/IdeasData';

interface Props {
  idea: Idea;
  preview: boolean;
}

const Idea: NextPage<Props> = ({ idea, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{idea.attributes.title}</title>
        <meta name="description" content={idea.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <div>I&apos;m in preview mode !</div>}

      <h2 className={styles.title}>{idea.attributes.title}</h2>

      <div className={styles.authorInfo}>
        {idea.attributes.author}, le {idea.attributes.published}
      </div>

      <ReactMarkdown className={styles.content}>
        {idea.attributes.content}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas`);
  const ideas: IdeasData = await res.json();

  // Get the paths we want to pre-render based on ideas.
  const paths = ideas.data.map((idea) => ({
    params: { slug: idea.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Idea not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  const isInPreviewMode = preview ? true : false;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}`
  );
  const articleData: IdeaDataBySlug = await res.json();

  // Pass idea data to the page via props.
  return { props: { idea: articleData.data[0], preview: isInPreviewMode } };
};

export default Idea;