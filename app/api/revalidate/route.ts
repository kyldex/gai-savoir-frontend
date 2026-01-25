import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * Route Handler for on-demand revalidation.
 * Called by Strapi CMS when content is updated.
 *
 * Example URL: /api/revalidate?secret=xxx&slug=my-post&category=articles&subcategory=culture
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!slug || !category || !subcategory) {
    return NextResponse.json(
      { message: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    // Revalidate the specific page.
    revalidatePath(`/${category}/${subcategory}/${slug}`);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}
