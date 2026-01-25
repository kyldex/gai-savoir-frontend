import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import styles from './styles.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import Contributor from '../../../components/common/Contributor';
import { getSocialMediaMetaTags } from '../../../utils/socialMetadata';

import eventsData from '../../../data/event';
import type { EventData } from '../../../data/eventType';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Tells Next.js which slugs to pre-render at build time.
 */
export async function generateStaticParams() {
  const events: EventData = eventsData;

  // Return an array of { slug } objects for each event.
  // These paths will be pre-rendered at build time.
  return events.map((event) => ({ slug: event.attributes.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((item) => item.attributes.slug === slug);

  if (!event) {
    return { title: 'Évènement du Gai Savoir' };
  }

  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/evenements/${slug}`;

  return {
    title: event.attributes.title,
    description: event.attributes.excerpt,
    ...getSocialMediaMetaTags({
      title: event.attributes.title,
      description: event.attributes.excerpt,
      url: pageUrl
    })
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;

  // For events, preview mode is not used since data is local,
  // but we keep it for consistency.
  const { isEnabled: isPreview } = await draftMode();

  const event = eventsData.find((item) => item.attributes.slug === slug);
  if (!event) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {isPreview && <div>I&apos;m in preview mode !</div>}

      <HomePageLink />

      <h1 className={styles.title}>{event.attributes.title}</h1>

      <div className={styles.excerpt}>{event.attributes.excerpt}</div>

      <div className={styles.iframeContainer}>
        <iframe
          width="800"
          height="450"
          src={event.attributes.mainVideoUrl}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>

      <div className={styles.content}>
        {event.attributes.content.map((contentPart, index) => (
          <p key={index}>{contentPart}</p>
        ))}
      </div>

      <h2 className={styles.teamTitle}>TABLE RONDE</h2>

      <div className={styles.team}>
        {event.attributes.speakers.map((speaker) => (
          <div className={styles.contributorContainer} key={speaker.lastName}>
            <Contributor
              firstName={speaker.firstName}
              lastName={speaker.lastName}
              description={speaker.description}
              imageUrl={speaker.imageUrl}
              variant
            />
          </div>
        ))}
      </div>
    </div>
  );
}
