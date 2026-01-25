import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import AudiovisualProduction from '../../../../components/common/AudiovisualProduction';
import { getSocialMediaMetaTags } from '../../../../utils/socialMetadata';

import {
  SUBCATEGORIES,
  FORMATTED_SUBCATEGORY_NAME
} from '../../../../utils/constants';
import {
  getAudiovisualProductionSlugsBySubcategory,
  getAudiovisualProductionBySlug
} from '../../../../services/strapi';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Tells Next.js which slugs to pre-render at build time.
 */
export async function generateStaticParams() {
  const slugs = await getAudiovisualProductionSlugsBySubcategory(
    SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS
  );

  // Return an array of { slug } objects for each production.
  // These paths will be pre-rendered at build time.
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const production = await getAudiovisualProductionBySlug(slug, false);

  if (!production) {
    return { title: 'Production Audiovisuelle - Gai Savoir' };
  }

  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/production-audiovisuelle/${FORMATTED_SUBCATEGORY_NAME.EXTERNAL_CONTRIBUTIONS}/${slug}`;

  return {
    title: production.attributes.title,
    description: production.attributes.excerpt,
    ...getSocialMediaMetaTags({
      title: production.attributes.title,
      description: production.attributes.excerpt,
      url: pageUrl
    })
  };
}

export default async function AudiovisualProductionPage({ params }: Props) {
  const { slug } = await params;

  // It will be enabled at request time if draft mode is on,
  // allowing us to fetch unpublished content from Strapi.
  const { isEnabled: isPreview } = await draftMode();

  const audiovisualProduction = await getAudiovisualProductionBySlug(
    slug,
    isPreview
  );
  if (!audiovisualProduction) {
    notFound();
  }

  return (
    <AudiovisualProduction
      audiovisualProduction={audiovisualProduction}
      preview={isPreview}
      formattedSubcategoryName={FORMATTED_SUBCATEGORY_NAME.EXTERNAL_CONTRIBUTIONS}
    />
  );
}
