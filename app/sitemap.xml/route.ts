import { NextRequest, NextResponse } from 'next/server';

import type { IdeasData } from '../../types/IdeasData';
import type Idea from '../../types/Idea';
import { AudiovisualProductionsData } from '../../types/AudiovisualProductionsData';
import AudiovisualProduction from '../../types/AudiovisualProduction';

type SubcategoriesData = {
  data: {
    id: number;
    attributes: {
      slug: string;
      category: {
        data: {
          id: number;
          attributes: {
            slug: string;
          };
        };
      };
    };
  }[];
};

const generateSiteMap = (
  ideas: Idea[],
  audiovisualProductions: AudiovisualProduction[],
  subcategoriesData: SubcategoriesData
): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.gai-savoir.fr/</loc>
      </url>
      ${ideas
        .map(({ attributes }) => {
          const subcategorySlug = attributes.subcategory?.data.attributes.slug;
          if (!subcategorySlug) return null;
          return `
            <url>
              <loc>${`https://www.gai-savoir.fr/articles/${subcategorySlug}/${attributes.slug}`}</loc>
            </url>
          `;
        })
        .join('')}
      ${audiovisualProductions
        .map(({ attributes }) => {
          const subcategorySlug = attributes.subcategory?.data.attributes.slug;
          if (!subcategorySlug) return null;
          return `
            <url>
              <loc>${`https://www.gai-savoir.fr/production-audiovisuelle/${subcategorySlug}/${attributes.slug}`}</loc>
            </url>
          `;
        })
        .join('')}
      ${subcategoriesData.data
        .map((subcategory) => {
          const correspondingCategory = subcategory.attributes.category.data.attributes.slug;
          return `
            <url>
              <loc>${`https://www.gai-savoir.fr/${correspondingCategory}/${subcategory.attributes.slug}`}</loc>
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
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?populate=subcategory`
  );
  const ideas: IdeasData = await ideasRes.json();

  const audiovisualProductionsRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?populate=subcategory`
  );
  const audiovisualProductions: AudiovisualProductionsData =
    await audiovisualProductionsRes.json();

  const subcategoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/subcategories?populate=category`
  );
  const subcategoriesData: SubcategoriesData = await subcategoriesRes.json();

  const sitemap = generateSiteMap(
    ideas.data,
    audiovisualProductions.data,
    subcategoriesData
  );

  // Return the response as XML.
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
};
