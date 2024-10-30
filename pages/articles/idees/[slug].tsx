import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import Article from '../../../components/common/Article';

import type Idea from '../../../types/Idea';
import type { IdeasData, IdeaDataBySlug } from '../../../types/IdeasData';
import {
  SUBCATEGORIES,
  FORMATTED_SUBCATEGORY_NAME
} from '../../../utils/constants';

type Props = {
  article: Idea;
  preview: boolean;
};

const ArticlePage: NextPage<Props> = ({ article, preview }) => {
  return (
    <Article
      article={article}
      preview={preview}
      formattedSubcategoryName={FORMATTED_SUBCATEGORY_NAME.IDEAS}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?filters[$and][0][subcategory][name][$eq]=${SUBCATEGORIES.IDEAS}`
  );
  const articles: IdeasData = await res.json();

  // Get the paths we want to pre-render based on articles.
  const paths = articles.data.map((article) => ({
    params: { slug: article.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Article not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  const isInPreviewMode = preview ? true : false;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}&populate[content_components][populate]=*`
  );
  const articleData: IdeaDataBySlug = await res.json();

  // Pass article data to the page via props.
  return { props: { article: articleData.data[0], preview: isInPreviewMode } };
};

export default ArticlePage;
