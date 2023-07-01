import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import styles from './[slug].module.scss';

import HomePageLink from '../../components/common/HomePageLink';

import Idea from '../../types/Idea';
import { IdeasData, IdeaDataBySlug } from '../../types/IdeasData';
import formatDate from '../../utils/date';

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

      <HomePageLink />

      <h1 className={styles.title}>{idea.attributes.title}</h1>

      <div className={styles.authorInfo}>
        {idea.attributes.author}, le {formatDate(idea.attributes.published)}
      </div>

      <div className={styles.contentContainer}>
        {idea.attributes.content ? (
          <div className={styles.component}>
            <ReactMarkdown>{idea.attributes.content}</ReactMarkdown>
          </div>
        ) : null}

        {idea.attributes.content_components &&
        idea.attributes.content_components.length !== 0 ? (
          <>
            {idea.attributes.content_components.map((component, index) => {
              if (component.__component === 'content.text') {
                return (
                  <div className={styles.component} key={index}>
                    <ReactMarkdown>{component.text}</ReactMarkdown>
                  </div>
                );
              }
              if (component.__component === 'content.image') {
                return (
                  <div className={styles.component} key={index}>
                    <figure>
                      <Image
                        src={component.image.data.attributes.formats.medium.url}
                        width={
                          component.image.data.attributes.formats.medium.width
                        }
                        height={
                          component.image.data.attributes.formats.medium.height
                        }
                        sizes="100vw"
                        alt={component.alternative_text || ''}
                      />
                      {component.caption ? (
                        <figcaption className={styles.figcaption}>
                          {component.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  </div>
                );
              }
            })}
          </>
        ) : null}

        <div className={styles.greenBackground} />
        <div className={styles.purpleBackground} />
      </div>
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
    }filters[slug][$eq]=${slug}&populate[content_components][populate]=*`
  );
  const ideaData: IdeaDataBySlug = await res.json();

  // Pass idea data to the page via props.
  return { props: { idea: ideaData.data[0], preview: isInPreviewMode } };
};

export default Idea;
