import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

import type { IdeaDataBySlug } from '../../../types/IdeasData';
import { STRAPI_API_ENDPOINTS } from '../../../utils/constants';

const ARTICLES_CATEGORY_SLUG = 'articles';
const AUDIOVISUAL_PRODUCTION_CATEGORY_SLUG = 'production-audiovisuelle';

/**
 * Route Handler that enables Draft Mode (replaces Preview Mode from previous Next.js versions).
 * Called by Strapi CMS to preview unpublished content.
 *
 * Example URL: /api/preview?secret=xxx&post-slug=my-post&category-slug=articles&subcategory-slug=culture
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const secret = searchParams.get('secret');
  const postSlug = searchParams.get('post-slug');
  const categorySlug = searchParams.get('category-slug');
  const subcategorySlug = searchParams.get('subcategory-slug');

  if (!secret || !postSlug || !categorySlug || !subcategorySlug) {
    return NextResponse.json(
      { message: 'One of the parameters is missing to render the preview.' },
      { status: 400 }
    );
  }

  if (secret !== process.env.CLIENT_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  let strapiApiEndpoint = '';
  if (categorySlug === ARTICLES_CATEGORY_SLUG) {
    strapiApiEndpoint = STRAPI_API_ENDPOINTS.ARTICLES;
  } else if (categorySlug === AUDIOVISUAL_PRODUCTION_CATEGORY_SLUG) {
    strapiApiEndpoint = STRAPI_API_ENDPOINTS.AUDIOVISUAL_PRODUCTION;
  }

  const postSlugResponse = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${strapiApiEndpoint}?publicationState=preview&filters[slug][$eq]=${postSlug}`
  );
  const postData: IdeaDataBySlug = await postSlugResponse.json();
  const post = postData.data[0];

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  // Enable Draft Mode by setting the cookies.
  // This replaces res.setPreviewData({}) from Pages Router.
  const draft = await draftMode();
  draft.enable();

  // Redirect to the path of the post slug.
  redirect(`/${categorySlug}/${subcategorySlug}/${postSlug}`);
}
