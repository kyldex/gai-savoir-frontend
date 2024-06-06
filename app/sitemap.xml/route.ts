import { NextRequest, NextResponse } from 'next/server';

import type { IdeasData } from '../../types/IdeasData';
import type Idea from '../../types/Idea';
import { AudiovisualProductionsData } from '../../types/AudiovisualProductionsData';
import AudiovisualProduction from '../../types/AudiovisualProduction';

const generateSiteMap = (
  ideas: Idea[],
  audiovisualProductions: AudiovisualProduction[]
): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.gai-savoir.fr/</loc>
      </url>
      <url>
        <loc>https://www.gai-savoir.fr/idees</loc>
      </url>
      ${ideas
        .map(({ attributes }) => {
          return `
        <url>
          <loc>${`https://www.gai-savoir.fr/idees/${attributes.slug}`}</loc>
        </url>
     `;
        })
        .join('')}
      <url>
        <loc>https://www.gai-savoir.fr/production-audiovisuelle</loc>
      </url>
      ${audiovisualProductions
        .map(({ attributes }) => {
          return `
        <url>
          <loc>${`https://www.gai-savoir.fr/production-audiovisuelle/${attributes.slug}`}</loc>
        </url>
     `;
        })
        .join('')}
      <url>
        <loc>https://www.gai-savoir.fr/contributeurs</loc>
      </url>
      <url>
        <loc>https://www.gai-savoir.fr/apropos</loc>
      </url>
   </urlset>
 `;
};

export const GET = async (req: NextRequest) => {
  const ideasRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas`
  );
  const ideas: IdeasData = await ideasRes.json();

  const audiovisualProductionsRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions`
  );
  const audiovisualProductions: AudiovisualProductionsData =
    await audiovisualProductionsRes.json();

  const sitemap = generateSiteMap(ideas.data, audiovisualProductions.data);

  console.log(sitemap);

  // Return the response as XML.
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
};
