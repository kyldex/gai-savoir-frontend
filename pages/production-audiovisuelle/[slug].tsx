import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import styles from './[slug].module.scss';

import HomePageLink from '../../components/common/HomePageLink';

import audiovisualData from '../../assets/data/audiovisual';
import type {
  Audiovisual,
  AudiovisualData
} from '../../assets/data/audiovisualType';
import formatDate from '../../utils/date';

interface Props {
  audiovisual: Audiovisual;
  preview: boolean;
}

const Audiovisual: NextPage<Props> = ({ audiovisual, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{audiovisual.attributes.title}</title>
        <meta name="description" content={audiovisual.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <div>I&apos;m in preview mode !</div>}

      <HomePageLink />

      <h1 className={styles.title}>{audiovisual.attributes.title}</h1>

      <div className={styles.publicationDate}>
        Publié le {formatDate(audiovisual.attributes.published)}
      </div>

      <div className={styles.iframeContainer}>
        <iframe
          width="800"
          height="450"
          src={audiovisual.attributes.videoUrl}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>

      <div className={styles.content}>
        {audiovisual.attributes.content.map((contentPart, index) => (
          <p key={index}>{contentPart}</p>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const audiovisuals: AudiovisualData = audiovisualData;

  // Get the paths we want to pre-render based on audiovisuals.
  const paths = audiovisuals.map((audiovisual) => ({
    params: { slug: audiovisual.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Audiovisual not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  // const isInPreviewMode = preview ? true : false;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?${
  //     isInPreviewMode ? 'publicationState=preview&' : ''
  //   }filters[slug][$eq]=${slug}`
  // );
  // const articleData: IdeaDataBySlug = await res.json();

  console.log(slug);

  const audiovisualItem = audiovisualData.find(
    (item) => item.attributes.slug === slug
  );
  const isInPreviewMode = false;

  // Pass idea data to the page via props.
  return { props: { audiovisual: audiovisualItem, preview: isInPreviewMode } };
};

export default Audiovisual;
