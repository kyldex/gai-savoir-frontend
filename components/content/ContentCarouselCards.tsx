import { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import styles from './ContentCarouselCards.module.scss';

import ItemCard from '../common/ItemCard';

import breakpoints from '../../utils/breakpoints';
import { CATEGORIES } from '../../utils/constants';
import type Idea from '../../types/Idea';
import type AudiovisualProduction from '../../types/AudiovisualProduction';
import type { Event } from '../../data/eventType';

const getInfo = (type: 'events' | 'audiovisual' | 'ideas') => {
  let title = '';
  let allPostsURL = '/';
  let categorySlugPart = '';

  switch (type) {
    case 'events':
      title = CATEGORIES.EVENTS.toUpperCase();
      allPostsURL = '/evenements';
      categorySlugPart = 'evenements';
      break;
    case 'audiovisual':
      title = CATEGORIES.AUDIOVISUAL_PRODUCTION.toUpperCase();
      allPostsURL = '/production-audiovisuelle';
      categorySlugPart = 'production-audiovisuelle';
      break;
    case 'ideas':
      title = CATEGORIES.ARTICLES.toUpperCase();
      allPostsURL = '/articles';
      categorySlugPart = 'articles';
      break;
    default:
      console.error('unknown type for carousel cards');
  }

  return { title, allPostsURL, categorySlugPart };
};

type Props = {
  type: 'events' | 'audiovisual' | 'ideas';
  cardsData: Idea[] | AudiovisualProduction[] | Event[];
};

const ContentCarouselCards: FC<Props> = ({ type, cardsData }) => {
  const { title, allPostsURL, categorySlugPart } = getInfo(type);

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <div className={styles.allPosts}>
          <Link href={allPostsURL} className={styles.allPostsLink}>
            TOUS LES POSTS
          </Link>
          <div className={styles.triangle} />
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // Default parameter set to "auto" for SSG to work.
          slidesPerView="auto"
          breakpoints={{
            300: {
              slidesPerView: 1,
              centeredSlides: true
            },
            [breakpoints.sm]: {
              slidesPerView: 2,
              centeredSlides: false
            },
            [breakpoints.md]: {
              slidesPerView: 3,
              centeredSlides: false
            }
          }}
        >
          {cardsData.map((item) => {
            // TODO : type guards
            const subcategorySlug =
              item.attributes.subcategory?.data.attributes.slug;
            return (
              <SwiperSlide key={item.id}>
                <ItemCard
                  type={type}
                  title={item.attributes.title}
                  excerpt={item.attributes.excerpt}
                  categorySlugPart={
                    subcategorySlug
                      ? `${categorySlugPart}/${subcategorySlug}`
                      : categorySlugPart
                  }
                  slug={item.attributes.slug}
                  card_image={item.attributes.card_image}
                  isInsideCarousel
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default ContentCarouselCards;
