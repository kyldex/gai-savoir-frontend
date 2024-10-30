import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import AudiovisualProduction from '../../../components/common/AudiovisualProduction';

import type { default as AudiovisualProductionType } from '../../../types/AudiovisualProduction';
import type {
  AudiovisualProductionsData,
  AudiovisualProductionDataBySlug
} from '../../../types/AudiovisualProductionsData';
import { FORMATTED_SUBCATEGORY_NAME } from '../../../utils/constants';

type Props = {
  audiovisualProduction: AudiovisualProductionType;
  preview: boolean;
};

const AudiovisualProductionPage: NextPage<Props> = ({
  audiovisualProduction,
  preview
}) => {
  return (
    <AudiovisualProduction
      audiovisualProduction={audiovisualProduction}
      preview={preview}
      formattedSubcategoryName={FORMATTED_SUBCATEGORY_NAME.FRENCH_PORTRAITS}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions`
  );
  const audiovisualProductions: AudiovisualProductionsData = await res.json();

  const paths = audiovisualProductions.data.map((audiovisualProduction) => ({
    params: { slug: audiovisualProduction.attributes.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Audiovisual production not found');
  }

  // getStaticProps will be called at request time if
  // preview mode is on, at build time otherwise.
  const isInPreviewMode = preview ? true : false;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?${
      isInPreviewMode ? 'publicationState=preview&' : ''
    }filters[slug][$eq]=${slug}`
  );
  const audiovisualProductionData: AudiovisualProductionDataBySlug =
    await res.json();

  return {
    props: {
      audiovisualProduction: audiovisualProductionData.data[0],
      preview: isInPreviewMode
    }
  };
};

export default AudiovisualProductionPage;
