import type { NextApiRequest, NextApiResponse } from 'next';

import { IdeaDataBySlug } from '../../types/IdeasData';

type Data = {
  message: string;
};

// Currently only for strapi /ideas endpoint
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

  // If the idea is not found, send a 404-Not Found response.
  const slugResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?publicationState=preview&filters[slug][$eq]=${slug}`
  );
  const ideaData: IdeaDataBySlug = await slugResponse.json();
  const idea = ideaData.data[0];
  if (!idea) {
    return res.status(404).json({ message: 'Idea not found' });
  }

  // Enable Preview Mode by setting the cookies.
  res.setPreviewData({});
  // Redirect to the path of the idea slug.
  res.redirect(307, `/idees/${idea.attributes.slug}`);
}
