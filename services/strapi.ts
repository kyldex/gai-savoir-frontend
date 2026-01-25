import type { IdeasData, IdeaDataBySlug } from '../types/IdeasData';
import type Idea from '../types/Idea';
import type {
  AudiovisualProductionsData,
  AudiovisualProductionDataBySlug
} from '../types/AudiovisualProductionsData';
import type AudiovisualProduction from '../types/AudiovisualProduction';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function getArticles(): Promise<Idea[]> {
  const res = await fetch(
    `${STRAPI_API_URL}/ideas?populate[0]=card_image,subcategory&sort=publishedAt%3Adesc`
  );
  const data: IdeasData = await res.json();
  return data.data;
}

export async function getAudiovisualProductions(): Promise<
  AudiovisualProduction[]
> {
  const res = await fetch(
    `${STRAPI_API_URL}/audiovisual-productions?populate[0]=card_image,subcategory&sort=publishedAt%3Adesc`
  );
  const data: AudiovisualProductionsData = await res.json();
  return data.data;
}

export async function getArticlesBySubcategory(
  subcategoryName: string
): Promise<Idea[]> {
  const res = await fetch(
    `${STRAPI_API_URL}/ideas?filters[$and][0][subcategory][name][$eq]=${encodeURIComponent(subcategoryName)}&populate[0]=card_image&sort=publishedAt%3Adesc`
  );
  const data: IdeasData = await res.json();
  return data.data;
}

export async function getAudiovisualProductionsBySubcategory(
  subcategoryName: string
): Promise<AudiovisualProduction[]> {
  const res = await fetch(
    `${STRAPI_API_URL}/audiovisual-productions?filters[$and][0][subcategory][name][$eq]=${encodeURIComponent(subcategoryName)}&populate[0]=card_image&sort=publishedAt%3Adesc`
  );
  const data: AudiovisualProductionsData = await res.json();
  return data.data;
}

/**
 * Get all article slugs for a subcategory.
 * Used by generateStaticParams to pre-render pages at build time.
 */
export async function getArticleSlugsBySubcategory(
  subcategoryName: string
): Promise<string[]> {
  const res = await fetch(
    `${STRAPI_API_URL}/ideas?filters[$and][0][subcategory][name][$eq]=${encodeURIComponent(subcategoryName)}`
  );
  const data: IdeasData = await res.json();
  return data.data.map((article) => article.attributes.slug);
}

/**
 * Get a single article by slug.
 * @param slug - The article slug
 * @param isPreview - If true, fetches draft/unpublished content from Strapi
 */
export async function getArticleBySlug(
  slug: string,
  isPreview: boolean = false
): Promise<Idea | null> {
  const res = await fetch(
    `${STRAPI_API_URL}/ideas?${isPreview ? 'publicationState=preview&' : ''}filters[slug][$eq]=${slug}&populate[content_components][populate]=*`
  );
  const data: IdeaDataBySlug = await res.json();
  return data.data[0] || null;
}

/**
 * Get all audiovisual production slugs for a subcategory.
 * Used by generateStaticParams to pre-render pages at build time.
 */
export async function getAudiovisualProductionSlugsBySubcategory(
  subcategoryName: string
): Promise<string[]> {
  const res = await fetch(
    `${STRAPI_API_URL}/audiovisual-productions?filters[$and][0][subcategory][name][$eq]=${encodeURIComponent(subcategoryName)}`
  );
  const data: AudiovisualProductionsData = await res.json();
  return data.data.map((production) => production.attributes.slug);
}

/**
 * Get a single audiovisual production by slug.
 * @param slug - The production slug
 * @param isPreview - If true, fetches draft/unpublished content from Strapi
 */
export async function getAudiovisualProductionBySlug(
  slug: string,
  isPreview: boolean = false
): Promise<AudiovisualProduction | null> {
  const res = await fetch(
    `${STRAPI_API_URL}/audiovisual-productions?${isPreview ? 'publicationState=preview&' : ''}filters[slug][$eq]=${slug}&populate[content_components][populate]=*`
  );
  const data: AudiovisualProductionDataBySlug = await res.json();
  return data.data[0] || null;
}
