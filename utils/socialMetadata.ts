import type { Metadata } from 'next';

type SocialMediaMetaTagsParams = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

const DEFAULT_IMAGE = '/social_media_links_sharing_default.png';

/**
 * Returns OpenGraph and Twitter metadata.
 */
export function getSocialMediaMetaTags({
  title,
  description,
  url,
  image
}: SocialMediaMetaTagsParams): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      url,
      images: [image || DEFAULT_IMAGE],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      images: [image || DEFAULT_IMAGE]
    }
  };
}
