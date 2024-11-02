import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = req.query.secret;
  if (secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const { slug, category, subcategory } = req.query;

  try {
    // Revalidate the specific page
    await res.revalidate(`/${category}/${subcategory}/${slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
