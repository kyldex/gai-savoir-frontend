import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './[slug].module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import Contributor from '../../components/common/Contributor';

import eventsData from '../../data/event';
import type { Event, EventData } from '../../data/eventType';

interface Props {
  event: Event;
  preview: boolean;
}

const Event: NextPage<Props> = ({ event, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{event.attributes.title}</title>
        <meta name="description" content={event.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preview && <div>I&apos;m in preview mode !</div>}

      <HomePageLink />

      <h1 className={styles.title}>{event.attributes.title}</h1>

      <div className={styles.excerpt}>{event.attributes.excerpt}</div>

      <div className={styles.imgContainer}>
        <Image src={event.attributes.mainImgUrl} fill alt="" />
      </div>

      <div className={styles.content}>
        {event.attributes.content.map((contentPart, index) => (
          <p key={index}>{contentPart}</p>
        ))}
      </div>

      <h2 className={styles.teamTitle}>TABLE RONDE</h2>

      <div className={styles.team}>
        {event.attributes.speakers.map((speaker) => (
          <div className={styles.contributorContainer} key={event.id}>
            <Contributor
              firstname={speaker.firstname}
              lastname={speaker.lastname}
              description={speaker.description}
              imageUrl={speaker.imageUrl}
              variant
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const audiovisuals: EventData = eventsData;

  // Get the paths we want to pre-render based on audiovisuals.
  const paths = audiovisuals.map((event) => ({
    params: { slug: event.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Event not found');
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

  const eventItem = eventsData.find((item) => item.attributes.slug === slug);
  const isInPreviewMode = false;

  // Pass idea data to the page via props.
  return { props: { event: eventItem, preview: isInPreviewMode } };
};

export default Event;
