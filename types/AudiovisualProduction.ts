import { SubcategoryData } from './shared';

type AudiovisualProduction = {
  id: string;
  attributes: {
    title: string;
    excerpt: string;
    gai_savoir_production: boolean;
    card_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    published: string;
    video_url: string;
    content: string;
    slug: string;
    subcategory?: SubcategoryData | null;
  };
};

export default AudiovisualProduction;
