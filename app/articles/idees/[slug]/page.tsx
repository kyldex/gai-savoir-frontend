import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import Article from '../../../../components/common/Article';
import { getSocialMediaMetaTags } from '../../../../utils/socialMetadata';

import {
  SUBCATEGORIES,
  FORMATTED_SUBCATEGORY_NAME
} from '../../../../utils/constants';
import {
  getArticleSlugsBySubcategory,
  getArticleBySlug
} from '../../../../services/strapi';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Tells Next.js which slugs to pre-render at build time.
 */
export async function generateStaticParams() {
  const slugs = await getArticleSlugsBySubcategory(SUBCATEGORIES.IDEAS);

  // Return an array of { slug } objects for each article.
  // These paths will be pre-rendered at build time.
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, false);

  if (!article) {
    return { title: 'Article - Gai Savoir' };
  }

  const articleUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/articles/${FORMATTED_SUBCATEGORY_NAME.IDEAS}/${slug}`;

  return {
    title: article.attributes.title,
    description: article.attributes.excerpt,
    ...getSocialMediaMetaTags({
      title: article.attributes.title,
      description: article.attributes.excerpt,
      url: articleUrl
    })
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  // It will be enabled at request time if draft mode is on,
  // allowing us to fetch unpublished content from Strapi.
  const { isEnabled: isPreview } = await draftMode();

  const article = await getArticleBySlug(slug, isPreview);
  if (!article) {
    notFound();
  }

  return (
    <Article
      article={article}
      preview={isPreview}
      formattedSubcategoryName={FORMATTED_SUBCATEGORY_NAME.IDEAS}
    />
  );
}
