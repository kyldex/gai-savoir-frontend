import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './[slug].module.scss';

import HomePageLink from '../../../components/common/HomePageLink';

import AudiovisualProduction from '../../../types/AudiovisualProduction';
import {
  AudiovisualProductionsData,
  AudiovisualProductionDataBySlug
} from '../../../types/AudiovisualProductionsData';
import formatDate from '../../../utils/date';

type Props = {
  audiovisualProduction: AudiovisualProduction;
  preview: boolean;
};

const Audiovisual: NextPage<Props> = ({ audiovisualProduction, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{audiovisualProduction.attributes.title}</title>
        <meta
          name="description"
          content={audiovisualProduction.attributes.excerpt}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <div>I&apos;m in preview mode !</div>}

      <HomePageLink />

      <h1 className={styles.title}>{audiovisualProduction.attributes.title}</h1>

      <div className={styles.publicationDate}>
        Publié le {formatDate(audiovisualProduction.attributes.published)}
      </div>

      <div className={styles.iframeContainer}>
        <iframe
          width="800"
          height="450"
          src={audiovisualProduction.attributes.video_url}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>

      <div className={styles.content}>
        <ReactMarkdown>
          {audiovisualProduction.attributes.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions`
  );
  const audiovisualProductions: AudiovisualProductionsData = await res.json();

  const paths = audiovisualProductions.data.map((audiovisualProduction) => ({
    params: { slug: audiovisualProduction.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Audiovisual production not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  const isInPreviewMode = preview ? true : false;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}`
  );
  const audiovisualProductionData: AudiovisualProductionDataBySlug =
    await res.json();

  return {
    props: {
      audiovisualProduction: audiovisualProductionData.data[0],
      preview: isInPreviewMode
    }
  };
};

export default Audiovisual;
