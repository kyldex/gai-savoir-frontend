import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import styles from './Article.module.scss';

import SocialMediaMetaTags from '../../components/social-media/SocialMediaMetaTags';
import HomePageLink from '../../components/common/HomePageLink';

import type Idea from '../../types/Idea';
import type { FormattedSubcategoryName } from '../../utils/constants';
import formatDate from '../../utils/date';

type Props = {
  article: Idea;
  preview: boolean;
  formattedSubcategoryName: FormattedSubcategoryName;
};

const Article: FC<Props> = ({ article, preview, formattedSubcategoryName }) => {
  const articleUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${formattedSubcategoryName}/${article.attributes.slug}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />

        <SocialMediaMetaTags
          title={article.attributes.title}
          description={article.attributes.excerpt}
          url={articleUrl}
        />
      </Head>

      {preview && <div className={styles.previewMode}>PREVIEW MODE</div>}

      <HomePageLink />

      <h1 className={styles.title}>{article.attributes.title}</h1>

      <div className={styles.authorInfo}>
        {`${article.attributes.author}, le ${formatDate(
          article.attributes.published
        )}`}
      </div>

      <div className={styles.contentContainer}>
        {article.attributes.content ? (
          <div className={styles.component}>
            <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
          </div>
        ) : null}

        {article.attributes.content_components &&
        article.attributes.content_components.length !== 0 ? (
          <>
            {article.attributes.content_components.map((component, index) => {
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

              if (component.__component === 'content.carousel') {
                return (
                  <div className={styles.component} key={index}>
                    <Swiper
                      navigation
                      pagination
                      modules={[Navigation, Pagination]}
                    >
                      {component.images.data.map((image) => (
                        <SwiperSlide key={image.attributes.hash}>
                          <Image
                            src={image.attributes.formats.medium.url}
                            width={image.attributes.formats.medium.width}
                            height={image.attributes.formats.medium.height}
                            className={styles.carouselImage}
                            sizes="100vw"
                            alt=""
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
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

export default Article;
