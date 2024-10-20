import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import styles from './[slug].module.scss';

import SocialMediaMetaTags from '../../../components/social-media/SocialMediaMetaTags';
import HomePageLink from '../../../components/common/HomePageLink';

import Idea from '../../../types/Idea';
import { IdeasData, IdeaDataBySlug } from '../../../types/IdeasData';
import formatDate from '../../../utils/date';

type Props = {
  article: Idea;
  preview: boolean;
};

const Article: NextPage<Props> = ({ article, preview }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.attributes.title}</title>
        <meta name="description" content={article.attributes.excerpt} />
        <link rel="icon" href="/favicon.ico" />

        <SocialMediaMetaTags
          title={article.attributes.title}
          description={article.attributes.excerpt}
          url={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/actualites/${article.attributes.slug}`}
        />
      </Head>

      {preview && <div className={styles.previewMode}>PREVIEW MODE</div>}

      <HomePageLink />

      <h1 className={styles.title}>{article.attributes.title}</h1>

      <div className={styles.authorInfo}>
        {article.attributes.author}, le{' '}
        {formatDate(article.attributes.published)}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?filters[$and][0][subcategory][name][$eq]=Actualités`
  );
  const articles: IdeasData = await res.json();

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
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}&populate[content_components][populate]=*`
  );
  const articleData: IdeaDataBySlug = await res.json();

  // Pass article data to the page via props.
  return { props: { article: articleData.data[0], preview: isInPreviewMode } };
};

export default Article;
