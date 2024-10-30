import { FC } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import styles from './AudiovisualProduction.module.scss';

import SocialMediaMetaTags from '../../components/social-media/SocialMediaMetaTags';
import HomePageLink from '../../components/common/HomePageLink';

import type { default as AudiovisualProductionType } from '../../types/AudiovisualProduction';
import type { FormattedSubcategoryName } from '../../utils/constants';
import formatDate from '../../utils/date';

type Props = {
  audiovisualProduction: AudiovisualProductionType;
  preview: boolean;
  formattedSubcategoryName: FormattedSubcategoryName;
};

const AudiovisualProduction: FC<Props> = ({
  audiovisualProduction,
  preview,
  formattedSubcategoryName
}) => {
  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/production-audiovisuelle/${formattedSubcategoryName}/${audiovisualProduction.attributes.slug}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{audiovisualProduction.attributes.title}</title>
        <meta
          name="description"
          content={audiovisualProduction.attributes.excerpt}
        />
        <link rel="icon" href="/favicon.ico" />

        <SocialMediaMetaTags
          title={audiovisualProduction.attributes.title}
          description={audiovisualProduction.attributes.excerpt}
          url={pageUrl}
        />
      </Head>

      {preview && <div className={styles.previewMode}>PREVIEW MODE</div>}

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

export default AudiovisualProduction;
