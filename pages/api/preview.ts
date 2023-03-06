import type { NextApiRequest, NextApiResponse } from 'next';

import { ArticleDataBySlug } from '../../types/ArticlesData';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const secret = req.query.secret;
  const slug = req.query.slug;

  if (!secret || !slug) {
    return res
      .status(400)
      .json({ message: 'One of the two parameters "secret" or "slug" is missing' });
  }

  if (secret !== process.env.CLIENT_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // If the article is not found, send a 404-Not Found response.
  const slugResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles?publicationState=preview&filters[slug][$eq]=${slug}`
  );
  const articleData: ArticleDataBySlug = await slugResponse.json();
  const article = articleData.data[0];
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  // Enable Preview Mode by setting the cookies.
  res.setPreviewData({});
  // Redirect to the path of the article slug.
  res.redirect(307, `/articles/${article.attributes.slug}`);
}
