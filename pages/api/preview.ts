import type { NextApiRequest, NextApiResponse } from 'next';

import type { IdeaDataBySlug } from '../../types/IdeasData';
import { STRAPI_API_ENDPOINTS } from '../../utils/constants';

const ARTICLES_CATEGORY_SLUG = 'articles';
const AUDIOVISUAL_PRODUCTION_CATEGORY_SLUG = 'production-audiovisuelle';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const secret = req.query.secret;
  const postSlug = req.query['post-slug'];
  const categorySlug = req.query['category-slug'];
  const subcategorySlug = req.query['subcategory-slug'];

  if (!secret || !postSlug || !categorySlug || !subcategorySlug) {
    return res.status(400).json({
      message: 'One of the parameters is missing to render the preview.'
    });
  }

  if (secret !== process.env.CLIENT_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  let strapiApiEndpoint = '';
  if (categorySlug === ARTICLES_CATEGORY_SLUG) {
    strapiApiEndpoint = STRAPI_API_ENDPOINTS.ARTICLES;
  } else if (categorySlug === AUDIOVISUAL_PRODUCTION_CATEGORY_SLUG) {
    strapiApiEndpoint = STRAPI_API_ENDPOINTS.AUDIOVISUAL_PRODUCTION;
  }

  // If the post is not found, send a 404-Not Found response.
  const postSlugResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${strapiApiEndpoint}?publicationState=preview&filters[slug][$eq]=${postSlug}`
  );
  const postData: IdeaDataBySlug = await postSlugResponse.json();
  const post = postData.data[0];
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  // Enable Preview Mode by setting the cookies.
  res.setPreviewData({});
  // Redirect to the path of the post slug.
  res.redirect(307, `/${categorySlug}/${subcategorySlug}/${postSlug}`);
}
